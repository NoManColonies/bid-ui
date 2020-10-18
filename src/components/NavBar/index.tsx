import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { useToken } from '../../utils/useToken'
import { useWebsocket } from '../../utils/useWebsocket'
import Notification from './Notification'
import withWebsocketContext from '../../utils/withWebsocketContext'
import {
  NavBarContainer,
  NavBarWrapper,
  Logo,
  ActionWrapper,
  LinkWrapper,
  BellIcon,
  NotificationButton
} from './styled'
import { AlertType } from '../../interfaces/Credential'

function NavBar(): ReactElement {
  const [notification, toggleNotification] = useState<boolean>(false)
  const [unread, setUnread] = useState<boolean>(false)
  const [
    { token, alerts },
    {
      handleFetchAlerts,
      handleFetchNewAlerts,
      handleAddAlert,
      handleRemoveAlert
    }
  ] = useToken()
  const [, { handleAddSubscription, handleRemoveSubscription }] = useWebsocket()

  const handleAlertChannel = useCallback(
    ({ data }: MessageEvent): void => {
      const { t, d } = JSON.parse(data)
      console.log(d)

      if (t === 7) {
        switch (d.data.type) {
          case 'new:alert': {
            handleAddAlert(d.data.data)
            setUnread(true)
            break
          }
          case 'edit:alert': {
            handleRemoveAlert(d.data.data)
            break
          }
          default:
            console.log(t, d.data.data)
        }
      }
    },
    [handleAddAlert, handleRemoveAlert, setUnread]
  )

  useEffect(() => {
    if (token.uuid) {
      handleAddSubscription(
        { subscription: 'alert', topic: token.uuid },
        handleAlertChannel
      )

      return (): void =>
        handleRemoveSubscription(
          { subscription: 'alert', topic: token.uuid },
          handleAlertChannel
        )
    }
  }, [
    handleAddSubscription,
    handleRemoveSubscription,
    handleAlertChannel,
    token.uuid
  ])

  useEffect(() => {
    const alertUuids: string[] = alerts
      // eslint-disable-next-line
      .filter(({ is_read }: AlertType): boolean => !is_read)
      .map(({ uuid }: AlertType): string => uuid)
    if (notification && alertUuids.length) handleFetchNewAlerts(alertUuids)
  }, [notification, handleFetchNewAlerts, alerts])

  useEffect(() => {
    token.token && handleFetchAlerts()

    if (alerts.length) {
      const unreadAlerts: AlertType[] = alerts.filter(
        // eslint-disable-next-line
        ({ is_read }: AlertType): boolean => !is_read
      )

      unreadAlerts.length && setUnread(true)
    }
  }, [handleFetchAlerts, setUnread, token.token, alerts])

  return (
    <NavBarContainer>
      <NavBarWrapper>
        <Logo>
          <Link to="/">BIDRS</Link>
        </Logo>
        <ActionWrapper>
          <LinkWrapper>
            <Link to="/">Home</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="offers">Offers</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="product">Add product</Link>
          </LinkWrapper>
          {!token.token ? (
            <>
              <LinkWrapper>
                <Link to="register">Join us</Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="login">Sign in</Link>
              </LinkWrapper>
            </>
          ) : (
            <LinkWrapper>
              <NotificationButton
                unread={unread}
                onClick={(): void => toggleNotification(!notification)}
              >
                <BellIcon icon={faBell} fixedWidth size="1x"></BellIcon>
              </NotificationButton>
              {notification && <Notification alerts={alerts} />}
            </LinkWrapper>
          )}
        </ActionWrapper>
      </NavBarWrapper>
    </NavBarContainer>
  )
}

export default withWebsocketContext(NavBar)
