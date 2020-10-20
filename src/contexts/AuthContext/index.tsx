import React, {
  createContext,
  useEffect,
  useReducer,
  ReactElement
} from 'react'
import { HEALTH_CHECK, FETCH_POST } from '../../services/FetchAPI'
import {
  CredentialType,
  AlertType,
  TokensType
} from '../../interfaces/Credential'
import {
  PAYLOAD_TYPE,
  RefreshTokenFormType,
  RefreshTokenResponseType,
  AuthContextType
} from './AuthContext'
import Payload from '../../interfaces/Payload'

export const CredentialContext = createContext<AuthContextType<CredentialType>>(
  {}
)

const INITIAL_STATE: CredentialType = {
  token: { token: '', refreshToken: '', uuid: '' },
  alerts: []
}

const TOKEN_STORE = 'token'

function authReducer(
  state: CredentialType,
  action: Payload<PAYLOAD_TYPE>
): CredentialType {
  switch (action.type) {
    case 'NEW_TOKEN': {
      const tokens: TokensType = JSON.parse(action.payload)

      return {
        ...state,
        token: {
          token: tokens.token,
          refreshToken: tokens.refreshToken,
          uuid: tokens.uuid
        }
      }
    }
    case 'NEW_ALERT': {
      const alerts: AlertType[] = JSON.parse(action.payload)

      return {
        ...state,
        alerts
      }
    }
    case 'ADD_ALERT': {
      const alert: AlertType = JSON.parse(action.payload)

      return {
        ...state,
        alerts: [...state.alerts, alert]
      }
    }
    case 'REMOVE_ALERT': {
      const alert: AlertType = JSON.parse(action.payload)

      return {
        ...state,
        alerts: state.alerts.filter((filter) => filter.uuid !== alert.uuid)
      }
    }
    case 'ABORT_ALL':
      return INITIAL_STATE
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

  useEffect(() => {
    !credential.token.refreshToken &&
      HEALTH_CHECK().then((response: boolean) => {
        response &&
          FETCH_POST<
            {},
            RefreshTokenFormType,
            string,
            RefreshTokenResponseType
          >(
            'authenticate',
            {},
            {
              refreshToken: window.localStorage.getItem(TOKEN_STORE) || ''
            },
            ''
          )
            .then((response: RefreshTokenResponseType): void =>
              credentialDispatch({
                type: 'NEW_TOKEN',
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
      })
  }, [credential.token.refreshToken])

  useEffect(() => {
    credential.token.refreshToken &&
      window.localStorage.setItem(TOKEN_STORE, credential.token.refreshToken)
  }, [credential.token.refreshToken])

  return (
    <CredentialContext.Provider value={{ credential, credentialDispatch }}>
      {children}
    </CredentialContext.Provider>
  )
}

export default AuthContext
