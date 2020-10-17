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
} from '../RegistrationForm/styles'
import InputField from '../InputField'
import { useToken } from '../../contexts/AuthContext'
import { useRegistration } from '../../contexts/RegisterContext'
import withHelmet from '../../utils/withHelmet'

function RegistrationForm(): ReactElement {
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
          {credential.token && <Paragraph>{credential.token}</Paragraph>}
          <Signup>
            <Form onSubmit={onSubmitRegister}>
              <Title>SIGN IN</Title>
              <InputField
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  handleChangeUsername(event.target.value)
                }
              />
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  handleChangeEmail(event.target.value)
                }
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  handleChangePassword(event.target.value)
                }
              />
              <InputField
                type="text"
                name="key"
                placeholder=""
                value={key}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  handleChangeKey(event.target.value)
                }
              />
              <Button type="submit">SING UP</Button>
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

export default withHelmet('BDRS | Register')(RegistrationForm)
