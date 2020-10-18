import React, { useCallback, ChangeEvent, FormEvent, ReactElement } from 'react'
import {
  Container,
  FormsContainer,
  SigninSignup,
  Signup,
  PanelsContainer,
  Panel,
  RightPanel,
  Form,
  Button,
  Paragraph,
  Content,
  Title
} from '../RegistrationForm/styled'
import InputField from '../InputField'
import {
  faUser,
  faMailBulk,
  faKey,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'
import { useToken } from '../../utils/useToken'
import { useRegistration } from '../../contexts/RegisterContext'
import withHelmet from '../../utils/withHelmet'

interface RegistrationFormType {
  admin: boolean;
}

function RegistrationForm({ admin }: RegistrationFormType): ReactElement {
  const [
    { username, email, password, key, loading },
    {
      handleChangeUsername,
      handleChangeEmail,
      handleChangePassword,
      handleChangeKey,
      handleChangeLoading,
      handleChangeReset
    }
  ] = useRegistration()
  const [credential, { handleFetchRegister }] = useToken()

  // handle function that will submit form request
  const onSubmitRegister = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      // prevent default submit actions
      e.preventDefault()
      // call handleFetchAction
      handleChangeLoading(true)
      handleFetchRegister({ username, email, password, key })
      handleChangeLoading(false)
      handleChangeReset()
    },
    [
      handleFetchRegister,
      email,
      username,
      password,
      key,
      handleChangeLoading,
      handleChangeReset
    ]
  )

  return (
    <Container>
      <FormsContainer>
        <SigninSignup>
          {/* TODO: Style these loading indicator properly */}
          {loading && <Paragraph>...is loading</Paragraph>}
          {/* FIXME: Remove these temporary debugging component */}
          {credential.token.token && (
            <Paragraph>{credential.token.token}</Paragraph>
          )}
          <Signup>
            <Form onSubmit={onSubmitRegister}>
              <Title>SIGN UP</Title>
              <InputField
                type="text"
                name="username"
                placeholder="Username"
                icon={faUser}
                value={username}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  handleChangeUsername(event.target.value)
                }
              />
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                icon={faMailBulk}
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  handleChangeEmail(event.target.value)
                }
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                icon={faKey}
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  handleChangePassword(event.target.value)
                }
              />
              {admin && (
                <InputField
                  type="text"
                  name="key"
                  placeholder="Secret"
                  icon={faQuestion}
                  value={key}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    handleChangeKey(event.target.value)
                  }
                />
              )}
              <Button type="submit">SIGN UP</Button>
            </Form>
          </Signup>
        </SigninSignup>
      </FormsContainer>
      <PanelsContainer>
        <Panel>
          <RightPanel>
            <Content>
              <h3>ONE OF US ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <Button type="submit">SING IN</Button>
            </Content>
          </RightPanel>
        </Panel>
      </PanelsContainer>
    </Container>
  )
}

export default withHelmet<RegistrationFormType>('BIDRS | Register')(
  RegistrationForm
)
