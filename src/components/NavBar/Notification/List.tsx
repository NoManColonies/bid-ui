import React, { ReactElement, useEffect, useCallback, useState } from 'react'
import { FETCH_GET, AUTH_CHECK } from '../../../services/FetchAPI'
import { AlertType } from '../../../interfaces/Credential'
import { useToken } from '../../../utils/useToken'
import { AuthorizationHeaderType } from '../../../contexts/AuthContext/AuthContext'
import {
  AlertWrapper,
  AlertThumbnail,
  AlertContentWrapper,
  AlertContent,
  AlertContentActionWrapper,
  AlertContentAction
} from './styled'

interface ListType {
  alert: AlertType;
  onAccept: any;
  onDecline?: any;
}

function List({ alert, onAccept, onDecline }: ListType): ReactElement {
  const [customer, setCustomer] = useState<any>()
  const [imageUrl, setImageUrl] = useState<string>('')
  const [{ token }, { handleFetchToken }] = useToken()

  const handleFetchImage = useCallback(() => {
    token.token &&
      AUTH_CHECK(token.token)
        .then(() => {
          FETCH_GET<AuthorizationHeaderType, string, { data: string }>(
            'download/credential',
            {
              Authorization: `Bearer ${token.token}`
            },
            customer ? customer.path_to_credential : ''
          )
            .then(({ data }) => {
              setImageUrl(data)
            })
            .catch((e: Error) => console.log(e))
        })
        .catch(() => handleFetchToken())
  }, [customer, token.token, handleFetchToken])

  const handleFetchCustomer = useCallback(() => {
    token.token &&
      AUTH_CHECK(token.token)
        .then(() => {
          FETCH_GET<
            AuthorizationHeaderType,
            { references: string },
            { data: any }
          >(
            'users',
            { Authorization: `Bearer ${token.token}` },
            alert.reference,
            {
              references: 'customer'
            }
          )
            .then(({ data }) => {
              setCustomer(data.customer)
            })
            .catch((e: Error) => console.log(e))
        })
        .catch(() => handleFetchToken())
  }, [token.token, setCustomer, handleFetchToken, alert.reference])

  useEffect(() => {
    switch (alert.type) {
      case 'verification': {
        handleFetchCustomer()
        break
      }
      case 'bid': {
        break
      }
      case 'order': {
        break
      }
      default:
    }
  }, [alert.type, handleFetchCustomer])

  useEffect(() => {
    switch (alert.type) {
      case 'verification': {
        customer && handleFetchImage()
        break
      }
      case 'bid': {
        break
      }
      case 'order': {
        break
      }
      default:
    }
  }, [alert.type, handleFetchImage, customer])

  return (
    <AlertWrapper key={alert.uuid} type={alert.type}>
      {(alert.type === 'order' ||
        alert.type === 'bid' ||
        alert.type === 'verification') && (
        <AlertThumbnail url={imageUrl ? imageUrl : ''} />
      )}
      <AlertContentWrapper type={alert.type}>
        <AlertContent>
          <h2>{alert.title}</h2>
          <p>{alert.content}</p>
        </AlertContent>
        <AlertContentActionWrapper>
          {alert.type === 'order' ||
          alert.type === 'bid' ||
          alert.type === 'verification' ? (
            <>
              <AlertContentAction
                type="button"
                actionType="accept"
                onClick={onAccept}
              >
                {alert.accept}
              </AlertContentAction>
              <AlertContentAction
                type="button"
                actionType="decline"
                onClick={onDecline}
              >
                {alert.decline}
              </AlertContentAction>
            </>
          ) : (
            <AlertContentAction
              type="button"
              actionType="done"
              onClick={onAccept}
            >
              {alert.accept}
            </AlertContentAction>
          )}
        </AlertContentActionWrapper>
      </AlertContentWrapper>
    </AlertWrapper>
  )
}

export default List
