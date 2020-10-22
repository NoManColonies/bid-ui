import React, { ReactElement, useCallback } from 'react'
import { AlertType } from '../../../interfaces/Credential'
import { NotificationInterface } from './Notification'
import { NotificationWrapper, EmptyTag } from './styled'
import { useHistory } from 'react-router-dom'
import { useToken } from '../../../utils/useToken'
import { AUTH_CHECK, FETCH_UPDATE } from '../../../services/FetchAPI'
import { AuthorizationHeaderType } from '../../../contexts/AuthContext/AuthContext'
import List from './List'
import { AxiosError } from 'axios'

function Notification({
  alerts,
  toggleNotification
}: NotificationInterface): ReactElement {
  const [{ token }, { handleFetchToken }] = useToken()
  const history = useHistory()

  const handleAcknowledgeAlert = useCallback(
    (alert) => {
      token.token &&
        AUTH_CHECK(token.token)
          .then(() => {
            FETCH_UPDATE<
              { is_proceeded: boolean },
              AuthorizationHeaderType,
              undefined,
              void
            >(
              'alerts',
              // eslint-disable-next-line
              { is_proceeded: true },
              {
                Authorization: `Bearer ${token.token}`
              },
              alert.uuid
            ).catch((e: AxiosError) => console.error(e))
          })
          .catch(() => handleFetchToken())
    },
    [token.token, handleFetchToken]
  )

  const handleClickAccept = useCallback(
    (alert) => {
      switch (alert.type) {
        case 'verification': {
          toggleNotification(false)
          history.push(`home/verification/${alert.reference}`)
          break
        }
        case 'bid': {
          break
        }
        case 'order': {
          break
        }
        default:
          handleAcknowledgeAlert(alert)
      }
    },
    [toggleNotification, history, handleAcknowledgeAlert]
  )

  const handleClickDecline = useCallback(() => {
    toggleNotification(false)
  }, [toggleNotification])

  return (
    <NotificationWrapper>
      {!alerts.length && <EmptyTag>Empty...</EmptyTag>}
      {alerts.map((alert: AlertType) => (
        <List
          key={alert.uuid}
          alert={alert}
          onAccept={(): void => handleClickAccept(alert)}
          onDecline={handleClickDecline}
        ></List>
      ))}
    </NotificationWrapper>
  )
}

export default Notification
