import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { useToken } from '../../utils/useToken'
import { useWebsocket } from '../../utils/useWebsocket'
import Notification from './Notification'
import { AlertType } from '../../interfaces/Credential'
import {
  Container,
  Wrapper,
  Box,
  BoxLogo,
  Join,
  ActionContainer,
  Action,
  BellIcon,
  NotificationButton
} from '../NavBar/styled'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import LogoImage from '../../assets/dollar-coin.svg'

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
    ({ d }): void => {
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
          console.log(d.data.data)
      }
    },
    [handleAddAlert, handleRemoveAlert, setUnread]
  )

  useEffect(() => {
    if (token.uuid) {
      handleAddSubscription(
        { subscription: 'alert', topic: token.uuid, packet: 7 },
        handleAlertChannel
      )

      return (): void => {
        console.log('removing subscription...')
        handleRemoveSubscription(
          { subscription: 'alert', topic: token.uuid, packet: 7 },
          handleAlertChannel
        )
      }
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
      .map(({ uuid }: AlertType): string => uuid)
    if (notification && alertUuids.length) handleFetchNewAlerts(alertUuids)
  }, [notification, handleFetchNewAlerts, alerts])

  useEffect(() => {
    if (alerts.length) {
      const unreadAlerts: AlertType[] = alerts.filter(
        // eslint-disable-next-line
        ({ is_read }: AlertType): boolean => !is_read
      )

      unreadAlerts.length && setUnread(true)
    }
  }, [handleFetchAlerts, setUnread, token.token, alerts])

  useEffect(() => {
    token.token && handleFetchAlerts()
  }, [token.token, handleFetchAlerts])

  return (
    <Container>
      <Wrapper>
        <Box>
          <Link to="/">
            <BoxLogo>
              <Logo src={LogoImage} />
              <p>BRS</p>
            </BoxLogo>
          </Link>
          <Join>
            {!token.token ? (
              <>
                <Action>
                  <Link to="/login">Login</Link>
                </Action>
                <Action>
                  <Link to="/register">Join</Link>
                </Action>
              </>
            ) : (
              <Action>
                <NotificationButton
                  unread={unread}
                  onClick={(): void => toggleNotification(!notification)}
                >
                  <BellIcon icon={faBell} fixedWidth size="1x"></BellIcon>
                </NotificationButton>
                {notification && <Notification alerts={alerts} />}
              </Action>
            )}
          </Join>
        </Box>
        <ActionContainer>
          <Action>
            <Link to="/">Home</Link>
          </Action>
          <Action>
            <Link to="/bid">Bid</Link>
          </Action>
          <Action>
            <Link to="/product">Product</Link>
          </Action>
          <Action>
            <Link to="/payment">Payment</Link>
          </Action>
        </ActionContainer>

      </Wrapper>
    </Container>
  )
}

export default NavBar
