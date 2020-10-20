import { useCallback, useContext, useMemo } from 'react'
import {
  HEALTH_CHECK,
  FETCH_GET,
  FETCH_POST,
  FETCH_UPDATE
} from '../services/FetchAPI'
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
    () =>
      HEALTH_CHECK().then(
        (response: boolean) =>
          response &&
          FETCH_POST<
            {},
            RefreshTokenFormType,
            string,
            RefreshTokenResponseType
          >('authenticate', {}, { refreshToken: credential.refreshToken }, '')
            .then(({ tokens }) =>
              credentialDispatch({
                type: 'NEW_TOKEN',
                payload: JSON.stringify({
                  token: tokens.token,
                  refreshToken: tokens.refreshToken,
                  uuid: tokens.uuid
                })
              })
            )
            .catch((e: Error) => console.error(e))
      ),
    [credential.refreshToken, credentialDispatch]
  )

  const handleFetchLogin = useCallback(
    ({ username, password }: LoginFormType) =>
      HEALTH_CHECK().then(
        (response: boolean) =>
          response &&
          FETCH_POST<LoginFormType, {}, string, RefreshTokenResponseType>(
            'login',
            { username, password },
            {},
            ''
          )
            .then(({ tokens }) =>
              credentialDispatch({
                type: 'NEW_TOKEN',
                payload: JSON.stringify({
                  token: tokens.token,
                  refreshToken: tokens.refreshToken,
                  uuid: tokens.uuid
                })
              })
            )
            .catch((e: Error) => console.error(e))
      ),
    [credentialDispatch]
  )

  const handleFetchLogout = useCallback(
    () =>
      HEALTH_CHECK().then((response: boolean) => {
        response &&
          FETCH_POST<
            {},
            RefreshTokenFormType,
            string,
            APIResponseType<undefined>
          >('logout', {}, { refreshToken: credential.refreshToken }, '')
            .catch((e: Error) => console.error(e))
            .finally(() =>
              credentialDispatch({
                type: 'ABORT_ALL',
                payload: ''
              })
            )
      }),
    [credential.refreshToken, credentialDispatch]
  )

  const handleFetchRegister = useCallback(
    ({ username, email, password, key }: RegistrationFormType) =>
      HEALTH_CHECK().then(
        (response: boolean) =>
          response &&
          FETCH_POST<
            RegistrationFormType,
            {},
            string,
            RegistrationResponseType
          >('users', { username, email, password, key }, {}, '')
            .then(({ tokens }) =>
              credentialDispatch({
                type: 'NEW_TOKEN',
                payload: JSON.stringify({
                  token: tokens.token,
                  refreshToken: tokens.refreshToken,
                  uuid: tokens.uuid
                })
              })
            )
            .catch((e: Error) => console.error(e))
      ),
    [credentialDispatch]
  )

  const handleFetchAlerts = useCallback(
    () =>
      HEALTH_CHECK().then((response: boolean) => {
        response &&
          FETCH_GET<
            AuthorizationHeaderType,
            undefined,
            APIResponseType<AlertType[]>
          >(
            'alerts',
            { Authorization: `Bearer ${credential.token.token}` },
            undefined
          )
            .then(({ data }) =>
              credentialDispatch({
                type: 'NEW_ALERT',
                payload: JSON.stringify(data)
              })
            )
            .catch((e: Error) => console.error(e))
      }),
    [credentialDispatch, credential.token.token]
  )

  const handleFetchNewAlerts = useCallback(
    (alertUuids: string[]) =>
      HEALTH_CHECK().then(
        (response: boolean) =>
          response &&
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
            .then(({ data }) =>
              credentialDispatch({
                type: 'NEW_ALERT',
                payload: JSON.stringify(data)
              })
            )
            .catch((e: Error) => console.error(e))
      ),
    [credentialDispatch, credential.token.token]
  )

  const handleAddAlert = useCallback(
    (alert: AlertType) =>
      credentialDispatch({ type: 'ADD_ALERT', payload: JSON.stringify(alert) }),
    [credentialDispatch]
  )

  const handleRemoveAlert = useCallback(
    (alert: AlertType) =>
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
