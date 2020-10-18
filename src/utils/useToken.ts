import { useCallback, useContext, useMemo } from 'react'
import { FETCH_GET, FETCH_POST, FETCH_UPDATE } from '../services/FetchAPI'
import {
  USE_TOKEN_RETURN_TYPE,
  RefreshTokenFormType,
  LoginFormType,
  RegistrationFormType,
  RegistrationResponseType,
  RefreshTokenResponseType,
  AuthorizationHeaderType
} from '../contexts/AuthContext/AuthContext'
import { AlertType } from '../interfaces/Credential'
import { CredentialContext } from '../contexts/AuthContext'
import APIResponseType from '../interfaces/APIResponse'

export function useToken(): USE_TOKEN_RETURN_TYPE {
  const { credential, credentialDispatch } = useContext(CredentialContext)

  const handleFetchToken = useCallback(
    async (): Promise<void> =>
      credentialDispatch({
        type: 'NEW_TOKEN',
        payload: await FETCH_POST<
          {},
          RefreshTokenFormType,
          string,
          RefreshTokenResponseType
        >('authenticate', {}, { refreshToken: credential.refreshToken }, '')
          .then((response): string =>
            JSON.stringify({
              token: response.tokens.token,
              refreshToken: response.tokens.refreshToken,
              uuid: response.tokens.uuid
            })
          )
          .catch((): string => '{}')
      }),
    [credential.refreshToken, credentialDispatch]
  )

  const handleFetchLogin = useCallback(
    async ({ username, password }: LoginFormType) =>
      credentialDispatch({
        type: 'NEW_TOKEN',
        payload: await FETCH_POST<
          LoginFormType,
          {},
          string,
          RefreshTokenResponseType
        >('login', { username, password }, {}, '')
          .then((response): string =>
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
        type: 'ABORT_ALL',
        payload: await FETCH_POST<
          {},
          RefreshTokenFormType,
          string,
          APIResponseType<undefined>
        >('logout', {}, { refreshToken: credential.refreshToken }, '')
          .then((): string => '{}')
          .catch((): string => '{}')
      }),
    [credential.refreshToken, credentialDispatch]
  )

  const handleFetchRegister = useCallback(
    async ({ username, email, password, key }: RegistrationFormType) =>
      credentialDispatch({
        type: 'NEW_TOKEN',
        payload: await FETCH_POST<
          RegistrationFormType,
          {},
          string,
          RegistrationResponseType
        >('users', { username, email, password, key }, {}, '')
          .then((response): string =>
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

  const handleFetchAlerts = useCallback(() => {
    FETCH_GET<AuthorizationHeaderType, undefined, APIResponseType<AlertType[]>>(
      'alerts',
      { Authorization: `Bearer ${credential.token.token}` },
      undefined
    )
      .then((response): void =>
        credentialDispatch({
          type: 'NEW_ALERT',
          payload: JSON.stringify(response.data)
        })
      )
      .catch((e: Error): void => console.error(e))
  }, [credentialDispatch, credential.token.token])

  const handleFetchNewAlerts = useCallback(
    (alertUuids: string[]) => {
      FETCH_UPDATE<
        {},
        AuthorizationHeaderType,
        undefined,
        APIResponseType<AlertType[]>
      >(
        'alerts',
        {},
        { Authorization: `Bearer ${credential.token.token}` },
        undefined,
        `list=${alertUuids.join(',')}`
      )
        .then((response): void =>
          credentialDispatch({
            type: 'NEW_ALERT',
            payload: JSON.stringify(response.data)
          })
        )
        .catch((e: Error): void => console.error(e))
    },
    [credentialDispatch, credential.token.token]
  )

  const handleAddAlert = useCallback(
    (alert: AlertType): void =>
      credentialDispatch({ type: 'ADD_ALERT', payload: JSON.stringify(alert) }),
    [credentialDispatch]
  )

  const handleRemoveAlert = useCallback(
    (alert: AlertType): void =>
      credentialDispatch({
        type: 'REMOVE_ALERT',
        payload: JSON.stringify(alert)
      }),
    [credentialDispatch]
  )

  const credentialStructure = useMemo(
    () => ({
      token: credential.token,
      alerts: credential.alerts
    }),
    [credential.token, credential.alerts]
  )

  const handleFunctions = useMemo(
    () => ({
      handleFetchToken,
      handleFetchLogin,
      handleFetchLogout,
      handleFetchRegister,
      handleFetchAlerts,
      handleFetchNewAlerts,
      handleAddAlert,
      handleRemoveAlert
    }),
    [
      handleFetchToken,
      handleFetchLogin,
      handleFetchLogout,
      handleFetchRegister,
      handleFetchAlerts,
      handleFetchNewAlerts,
      handleAddAlert,
      handleRemoveAlert
    ]
  )

  return [credentialStructure, handleFunctions]
}
