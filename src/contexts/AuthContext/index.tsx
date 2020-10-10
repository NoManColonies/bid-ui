import React, {
  createContext,
  useCallback,
  useEffect,
  useContext,
  useReducer,
  useMemo,
  ReactElement
} from 'react'
import { HEALTH_CHECK, FETCH_POST } from '../../services/FetchAPI'
import CredentialType from '../../interfaces/Credential'
import {
  PAYLOAD_TYPE,
  USE_TOKEN_RETURN_TYPE,
  RefreshTokenFormType,
  LoginFormType,
  RegistrationFormType,
  RegistrationResponseType,
  RefreshTokenResponseType,
  AuthContextType
} from './AuthContext'
import Payload from '../../interfaces/Payload'
import APIResponseType from '../../interfaces/APIResponse'

const CredentialContext = createContext<AuthContextType<CredentialType>>({})

const INITIAL_STATE: CredentialType = {
  token: '',
  refreshToken: '',
  uuid: ''
}

const TOKEN_STORE = 'token'

function authReducer(
  state: CredentialType,
  action: Payload<PAYLOAD_TYPE>
): CredentialType {
  switch (action.type) {
    case 'NEW_TOKEN': {
      const tokens: CredentialType = JSON.parse(action.payload)

      return {
        token: tokens.token,
        refreshToken: state.refreshToken,
        uuid: state.uuid
      }
    }
    case 'NEW_REFRESHTOKEN': {
      const tokens: CredentialType = JSON.parse(action.payload)

      return {
        token: tokens.token,
        refreshToken: tokens.refreshToken,
        uuid: tokens.uuid
      }
    }
    case 'ABORT_TOKENS': {
      return {
        token: '',
        refreshToken: '',
        uuid: ''
      }
    }
    default:
      return state
  }
}

function AuthContext({
  children
}: AuthContextType<CredentialType>): ReactElement {
  const [credential, credentialDispatch] = useReducer(
    authReducer,
    INITIAL_STATE
  )

  return (
    <CredentialContext.Provider value={{ credential, credentialDispatch }}>
      {children}
    </CredentialContext.Provider>
  )
}

export function useToken(): USE_TOKEN_RETURN_TYPE {
  const { credential, credentialDispatch } = useContext(CredentialContext)

  const handleFetchToken = useCallback(
    async (): Promise<void> =>
      credentialDispatch({
        type: 'NEW_REFRESHTOKEN',
        payload: await FETCH_POST<
          {},
          RefreshTokenFormType,
          string,
          RefreshTokenResponseType
        >('authenticate', {}, { refreshToken: credential.refreshToken }, '')
          .then((response: RefreshTokenResponseType): string =>
            JSON.stringify({
              token: response.tokens.token,
              refreshToken: response.tokens.refreshToken,
              uuid: response.tokens.uuid
            })
          )
          .catch((): string => '{}')
      }),
    [credentialDispatch, credential.refreshToken]
  )

  const handleFetchLogin = useCallback(
    async ({ username, password }: LoginFormType) =>
      credentialDispatch({
        type: 'NEW_REFRESHTOKEN',
        payload: await FETCH_POST<
          LoginFormType,
          {},
          string,
          RefreshTokenResponseType
        >('login', { username, password }, {}, '')
          .then((response: RefreshTokenResponseType): string =>
            JSON.stringify({
              token: response.tokens.token,
              refreshToken: response.tokens.refreshToken,
              uuid: response.tokens.uuid
            })
          )
          .catch((): string => '{}')
      }),
    [credentialDispatch]
  )

  const handleFetchLogout = useCallback(
    async () =>
      credentialDispatch({
        type: 'ABORT_TOKENS',
        payload: await FETCH_POST<
          {},
          RefreshTokenFormType,
          string,
          APIResponseType<undefined>
        >('logout', {}, { refreshToken: credential.refreshToken }, '')
          .then((): string => '{}')
          .catch((): string => '{}')
      }),
    [credentialDispatch, credential.refreshToken]
  )

  const handleFetchRegister = useCallback(
    async ({ username, email, password, key }: RegistrationFormType) =>
      credentialDispatch({
        type: 'NEW_REFRESHTOKEN',
        payload: await FETCH_POST<
          RegistrationFormType,
          {},
          string,
          RegistrationResponseType
        >('users', { username, email, password, key }, {}, '')
          .then((response: RegistrationResponseType): string =>
            JSON.stringify({
              token: response.tokens.token,
              refreshToken: response.tokens.refreshToken,
              uuid: response.tokens.uuid
            })
          )
          .catch((): string => '{}')
      }),
    [credentialDispatch]
  )

  useEffect((): void => {
    !credential.refreshToken &&
      HEALTH_CHECK() &&
      FETCH_POST<{}, RefreshTokenFormType, string, RefreshTokenResponseType>(
        'authenticate',
        {},
        {
          refreshToken: JSON.parse(
            window.localStorage.getItem(TOKEN_STORE) || '{}'
          ).refreshToken as CredentialType['refreshToken']
        },
        ''
      )
        .then((response: RefreshTokenResponseType): void =>
          credentialDispatch({
            type: 'NEW_REFRESHTOKEN',
            payload: JSON.stringify({
              token: response.tokens.token,
              refreshToken: response.tokens.refreshToken,
              uuid: response.tokens.uuid
            })
          })
        )
        .catch((e: Error): void =>
          console.error(`Refresh token restoration failed. ${e}`)
        )
  }, [credential.refreshToken, credentialDispatch])

  useEffect((): void => {
    credential &&
      window.localStorage.setItem(TOKEN_STORE, JSON.stringify(credential))
  }, [credential])

  const handleFunctions = useMemo(
    () => ({
      handleFetchToken,
      handleFetchLogin,
      handleFetchLogout,
      handleFetchRegister
    }),
    [handleFetchToken, handleFetchLogin, handleFetchLogout, handleFetchRegister]
  )

  return [credential, handleFunctions]
}

export default AuthContext
