import React, { ReactElement, useCallback, ChangeEvent, FormEvent } from 'react'
import {Container,FormsContainer,SigninSignup,Signin,Title,PanelsContainer,Panel,LeftPanel,Form,Button,Paragraph,Content} from '../LoginForm/styles'
import InputField from '../InputField'
import { useToken } from '../../contexts/AuthContext'
import { useRegistration } from '../../contexts/RegisterContext'
import withHelmet from '../../utils/withHelmet'
import BackgroundLogin from '../LoginForm/BackgrountLogin'
import backgroundImage from '../../assets/bg.png'

// import Images from '../assets/1png'



function LoginForm(): ReactElement {
  const [
    { username, password, loading },
    {
      handleChangeUsername,
      handleChangePassword,
      handleChangeLoading,
      handleChangeReset
    }
  ] = useRegistration()
  const [credential, { handleFetchLogin }] = useToken()

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

  return (
    <Container>
      <BackgroundLogin src={backgroundImage}/>
      <FormsContainer>
        <SigninSignup>
      {/* TODO: Style these loading indicator properly */}
      {loading && <Paragraph>...is loading</Paragraph>}
      {/* FIXME: Remove these temporary debugging component */}
      {credential.token && <Paragraph>{credential.token}</Paragraph>}
      <Signin>
      <Form onSubmit={onSubmitLogin}>
        <Title>WELLCOME</Title>

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
          type="password"
          name="password"
          placeholder="Password"
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          ex ratione. Aliquid!
        </p>
        <Button type="submit">SING UP</Button>
        </Content>

        </LeftPanel>
        </Panel>
      </PanelsContainer>

    </Container>

  )
}

export default withHelmet('BDRS | Login')(LoginForm)
