import React, {
  ReactElement,
  useCallback,
  ChangeEvent,
  FormEvent,
  useEffect
} from 'react'
import {
  Container,
  FormsContainer,
  SigninSignup,
  Signin,
  Title,
  PanelsContainer,
  Panel,
  LeftPanel,
  Form,
  Button,
  Paragraph,
  Content
} from '../LoginForm/styled'
import InputField from '../InputField'
import { useToken } from '../../utils/useToken'
import { useRegistration } from '../../contexts/RegisterContext'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import withHelmet from '../../utils/withHelmet'
import BackgroundLogin from '../LoginForm/BackgrountLogin'
import backgroundImage from '../../assets/backgraund/bg.png'
import ImageLogin from './ImageLogin'
import { useHistory } from 'react-router-dom'
import Image from '../../assets/surfer.svg'

// import Images from '../assets/1png'

function LoginForm(): ReactElement {
  const history = useHistory()
  const [
    { username, password, loading },
    {
      handleChangeUsername,
      handleChangePassword,
      handleChangeLoading,
      handleChangeReset
    }
  ] = useRegistration()
  const [{ token }, { handleFetchLogin }] = useToken()

  // handle function that will submit form request
  const onSubmitLogin = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      // prevent default submit actions
      e.preventDefault()
      // call handleFetchAction
      handleChangeLoading(true)
      handleFetchLogin({ username, password })
      handleChangeLoading(false)
      handleChangeReset()
    },
    [
      handleFetchLogin,
      username,
      password,
      handleChangeLoading,
      handleChangeReset
    ]
  )

  useEffect(() => {
    token.token && history.push('/home')
  }, [token.token, history])

  return (
    <Container>
      <BackgroundLogin src={backgroundImage} />
      <FormsContainer>
        <SigninSignup>
          {/* TODO: Style these loading indicator properly */}
          {loading && <Paragraph>...is loading</Paragraph>}
          <Signin>
            <Form onSubmit={onSubmitLogin}>
              <Title>WELCOME</Title>
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
                type="password"
                name="password"
                placeholder="Password"
                icon={faKey}
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  handleChangePassword(event.target.value)
                }
              />
              <Button type="submit">LOGIN</Button>
            </Form>
          </Signin>
        </SigninSignup>
      </FormsContainer>
      <PanelsContainer>
        <Panel>
          <LeftPanel>
            <Content>
              <h3>NEW HERE ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <Button type="submit">SIGN UP</Button>
            </Content>
            <ImageLogin src={Image} />
          </LeftPanel>
        </Panel>
      </PanelsContainer>
    </Container>
  )
}

export default withHelmet('BIDRS | Login')(LoginForm)
