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
  const [alertUuids, setAlertUuids] = useState<string[]>([])
  const [
    { token, alerts },
    {
      handleFetchAlerts,
      handleFetchNewAlerts,
      handleAddAlert,
      handleRemoveAlert,
      handleEditAlert
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
        case 'remove:alert': {
          handleRemoveAlert(d.data.data)
          break
        }
        case 'edit:alert': {
          handleEditAlert(d.data.data)
          break
        }
        default:
          console.log(d.data.data)
      }
    },
    [handleAddAlert, handleRemoveAlert, handleEditAlert, setUnread]
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
    const uuids: string[] = alerts
      // eslint-disable-next-line
      .filter(({ is_read }: AlertType) => !is_read)
      // eslint-disable-next-line
      .map(({ uuid }: AlertType): string => uuid)
    setAlertUuids(uuids)
  }, [alerts, setAlertUuids])

  useEffect(() => {
    if (notification && alertUuids.length) handleFetchNewAlerts(alertUuids)
  }, [notification, handleFetchNewAlerts, alertUuids])

  useEffect(() => {
    if (alerts.length) {
      const unreadAlerts: AlertType[] = alerts.filter(
        // eslint-disable-next-line
        ({ is_read }: AlertType): boolean => !is_read
      )

      unreadAlerts.length ? setUnread(true) : setUnread(false)
    }
  }, [setUnread, alerts])

  useEffect(() => {
    token.token && handleFetchAlerts()
  }, [token.token, handleFetchAlerts])

  return (
    <Container>
      <Wrapper>
        <Box>
          <Link to="/home">
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
                {notification && (
                  <Notification
                    alerts={alerts}
                    toggleNotification={toggleNotification}
                  />
                )}
              </Action>
            )}
          </Join>
        </Box>
        <ActionContainer>
          <Action>
            <Link to="/home">Home</Link>
          </Action>
          <Action>
            <Link to="/offers">View product</Link>
          </Action>
          <Action>
            <Link to="/home/product">Add product</Link>
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
