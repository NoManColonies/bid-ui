import { useCallback, useContext, useMemo } from 'react'
import {
  HEALTH_CHECK,
  AUTH_CHECK,
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
        () =>
          credential.token.refreshToken &&
          FETCH_POST<
            {},
            RefreshTokenFormType,
            string,
            RefreshTokenResponseType
          >(
            'authenticate',
            {},
            { refreshToken: credential.token.refreshToken },
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
    [credential.token.refreshToken, credentialDispatch]
  )

  const handleFetchLogin = useCallback(
    ({ username, password }: LoginFormType) =>
      HEALTH_CHECK().then(() =>
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
      AUTH_CHECK(credential.token.token).then(() =>
        FETCH_GET<RefreshTokenFormType, string, APIResponseType<undefined>>(
          'logout',
          { refreshToken: credential.token.refreshToken },
          ''
        )
          .catch((e: Error) => console.error(e))
          .finally(() =>
            credentialDispatch({
              type: 'ABORT_ALL',
              payload: ''
            })
          )
      ),
    [credential.token, credentialDispatch]
  )

  const handleFetchRegister = useCallback(
    ({ username, email, password, key }: RegistrationFormType) =>
      HEALTH_CHECK().then(() =>
        FETCH_POST<RegistrationFormType, {}, string, RegistrationResponseType>(
          'users',
          { username, email, password, key },
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

  const handleFetchAlerts = useCallback(
    () =>
      credential.token.token &&
      AUTH_CHECK(credential.token.token).then(() => {
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
      credential.token.token &&
      AUTH_CHECK(credential.token.token)
        .then(() =>
          FETCH_UPDATE<
            {},
            AuthorizationHeaderType,
            { list: string },
            APIResponseType<AlertType[]>
          >(
            'alerts/read',
            {},
            { Authorization: `Bearer ${credential.token.token}` },
            undefined,
            { list: alertUuids.join(',') }
          ).catch((e: Error) => console.error(e))
        )
        .catch(() => handleFetchToken()),
    [credential.token.token, handleFetchToken]
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

  const handleEditAlert = useCallback(
    (alert: AlertType) =>
      credentialDispatch({
        type: 'EDIT_ALERT',
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
      handleRemoveAlert,
      handleEditAlert
    }),
    [
      handleFetchToken,
      handleFetchLogin,
      handleFetchLogout,
      handleFetchRegister,
      handleFetchAlerts,
      handleFetchNewAlerts,
      handleAddAlert,
      handleRemoveAlert,
      handleEditAlert
    ]
  )

  return [credentialStructure, handleFunctions]
}
