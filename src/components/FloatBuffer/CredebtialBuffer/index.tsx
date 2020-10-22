import React, { useEffect, ReactElement, useCallback, useState } from 'react'
import { AxiosError } from 'axios'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import { AUTH_CHECK, FETCH_GET, FETCH_UPDATE } from '../../../services/FetchAPI'
import FloatBuffer from '../'
import { useToken } from '../../../utils/useToken'
import { AuthorizationHeaderType } from '../../../contexts/AuthContext/AuthContext'

interface CredentialImageType {
  url: string;
}

interface CredentialActionPropsType {
  actionType: string;
}

interface CredentialPropsType {
  uuid: string;
  username: string;
  customer: {
    first_name: string;
    last_name: string;
    path_to_credential: string;
  };
}

const INITIAL_STATE: CredentialPropsType = {
  uuid: '',
  username: '',
  customer: {
    // eslint-disable-next-line
    first_name: '',
    // eslint-disable-next-line
    last_name: '',
    // eslint-disable-next-line
    path_to_credential: ''
  }
}

const CredentialWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`

const LeftColumn = styled.div`
  grid-column: 1;
  padding: 1rem;
`

const RightColumn = styled.div`
  grid-column: 2;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const ProfileWrapper = styled.div`
  flex: 1;
`

const CredentialImage = styled.div`
  background-image: url(${({ url }: CredentialImageType): string => url});
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-color: #333;
`

const CredentialHeader = styled.div`
  color: #000;
  font-size: 2rem;
`

const CredentialParagraph = styled.div`
  color: #666;
  font-size: 1rem;
`

const ActionWrapper = styled.div``

const CredentialAction = styled.button`
  border: none;
  background-color: ${({ actionType }: CredentialActionPropsType): string =>
    actionType === 'approve' ? '#59c73e' : '#f73838'};
  padding: 1rem 3rem;
  border-radius: 20px;
  font-size: 1.2rem;
  color: #fff;
  transition: opacity ease 100ms;

  &:hover {
    opacity: 0.7;
  }

  & + button {
    margin-left: 1rem;
  }
`

function CredentialBuffer(): ReactElement {
  const [credential, setCredential] = useState<CredentialPropsType>(
    INITIAL_STATE
  )
  const [imageUrl, setImageUrl] = useState<string>('')
  const { uuid } = useParams()
  const history = useHistory()
  const [{ token }, { handleFetchToken }] = useToken()

  const handleFetchImage = useCallback(
    (customer) => {
      token.token &&
        AUTH_CHECK(token.token)
          .then(() => {
            FETCH_GET<AuthorizationHeaderType, string, { data: string }>(
              'download/credential',
              {
                Authorization: `Bearer ${token.token}`
              },
              customer.path_to_credential
            )
              .then(({ data }) => {
                setImageUrl(data)
              })
              .catch((e: Error) => console.log(e))
          })
          .catch(() => handleFetchToken())
    },
    [token.token, handleFetchToken]
  )

  const handleFetchCredential = useCallback(() => {
    token.token &&
      AUTH_CHECK(token.token)
        .then(() => {
          FETCH_GET<
            AuthorizationHeaderType,
            { references: string },
            { data: any }
          >('users', { Authorization: `Bearer ${token.token}` }, uuid, {
            references: 'customer'
          })
            .then(({ data }) => setCredential(data))
            .catch((e: Error) => console.error(e))
        })
        .catch(() => handleFetchToken())
  }, [token.token, uuid, handleFetchToken])

  const handleApproveCredential = useCallback(() => {
    token.token &&
      AUTH_CHECK(token.token)
        .then(() => {
          FETCH_UPDATE<
            { is_validated: boolean },
            AuthorizationHeaderType,
            undefined,
            void
          >(
            'customers',
            // eslint-disable-next-line
            { is_validated: true },
            {
              Authorization: `Bearer ${token.token}`
            },
            credential.uuid
          )
            .then(() => {
              history.goBack()
            })
            .catch((e: AxiosError) => console.error(e))
        })
        .catch(() => handleFetchToken())
  }, [token.token, credential.uuid, history, handleFetchToken])

  const handleRejectCredential = useCallback(() => {
    token.token &&
      AUTH_CHECK(token.token)
        .then(() => {
          FETCH_UPDATE<
            { is_rejected: boolean },
            AuthorizationHeaderType,
            undefined,
            void
          >(
            'customers',
            // eslint-disable-next-line
            { is_rejected: true },
            {
              Authorization: `Bearer ${token.token}`
            },
            credential.uuid
          )
            .then(() => {
              history.goBack()
            })
            .catch((e: AxiosError) => console.error(e))
        })
        .catch(() => handleFetchToken())
  }, [token.token, credential.uuid, history, handleFetchToken])

  useEffect(() => {
    handleFetchCredential()
  }, [handleFetchCredential])

  useEffect(() => {
    credential.customer.path_to_credential &&
      handleFetchImage(credential.customer)
    console.log(credential.uuid)
  }, [credential, handleFetchImage])

  return (
    <FloatBuffer width={'960px'} height={'650px'}>
      <CredentialWrapper>
        <LeftColumn>
          <CredentialHeader>Customer credential</CredentialHeader>
          <CredentialImage url={imageUrl} />
        </LeftColumn>
        <RightColumn>
          <ProfileWrapper>
            <CredentialHeader>Customer profile</CredentialHeader>
            <CredentialParagraph>
              Customer first name: {credential.customer.first_name}
            </CredentialParagraph>
            <CredentialParagraph>
              Customer last name: {credential.customer.last_name}
            </CredentialParagraph>
          </ProfileWrapper>
          <ActionWrapper>
            <CredentialAction
              type="button"
              actionType="approve"
              onClick={handleApproveCredential}
            >
              Approve
            </CredentialAction>
            <CredentialAction
              type="button"
              actionType="reject"
              onClick={handleRejectCredential}
            >
              Reject
            </CredentialAction>
          </ActionWrapper>
        </RightColumn>
      </CredentialWrapper>
    </FloatBuffer>
  )
}

export default CredentialBuffer
