import React, { ReactElement } from 'react'
import { AlertType } from '../../../interfaces/Credential'
import { NotificationInterface } from './Notification'
import {
  NotificationWrapper,
  EmptyTag,
  AlertWrapper,
  AlertThumbnail,
  AlertContentWrapper,
  AlertContent,
  AlertContentActionWrapper,
  AlertContentAction
} from './styled'

function Notification({ alerts }: NotificationInterface): ReactElement {
  return (
    <NotificationWrapper>
      {!alerts.length && <EmptyTag>Empty...</EmptyTag>}
      {alerts.map((alert: AlertType) => (
        <AlertWrapper key={alert.uuid} type={alert.type}>
          {(alert.type === 'order' || alert.type === 'bid') && (
            <AlertThumbnail url={''} />
          )}
          <AlertContentWrapper type={alert.type}>
            <AlertContent>
              <h2>{alert.title}</h2>
              <p>{alert.content}</p>
            </AlertContent>
            <AlertContentActionWrapper>
              {alert.type === 'order' || alert.type === 'bid' ? (
                <>
                  <AlertContentAction type="button" actionType="accept">
                    {alert.accept}
                  </AlertContentAction>
                  <AlertContentAction type="button" actionType="decline">
                    {alert.decline}
                  </AlertContentAction>
                </>
              ) : (
                <AlertContentAction type="button" actionType="done">
                  {alert.accept}
                </AlertContentAction>
              )}
            </AlertContentActionWrapper>
          </AlertContentWrapper>
        </AlertWrapper>
      ))}
    </NotificationWrapper>
  )
}

export default Notification
