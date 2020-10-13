import React, { ReactElement, useCallback, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import InputField from '../InputField'
import { useToken } from '../../contexts/AuthContext'
import { useRegistration } from '../../contexts/RegisterContext'
import withHelmet from '../../utils/withHelmet'
import RegistrationForm from '../RegistrationForm'
// import Images from '../assets/1png'



const Container=styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;

  &:before{
    content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -20%;
  right: 48%;
  transform: translateY(-10%);
  background-color:#0278AE;
  transition: 1.8s ease-in-out;
  border-radius:30%;
  z-index: 6;

  }
  `
const FormsContainer=styled.div`
 position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  `

const SigninSignup=styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  `

const Signin=styled.div`
  z-index: 2;
`
const Title=styled.div`
font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
  font-style:thicker;
  padding-bottom:2rem;
`
const PanelsContainer=styled.div`
 position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

`
const Panel=styled.div`
 display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;

  `
const LeftPanel=styled.div`
pointer-events: all;
  padding: 3rem 17% 2rem 12%;

`

const Form = styled.form`
 display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 2;
  `

const Button = styled.button`
  width: 150px;
  background-color: #0278AE;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin-top:2rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #E8FFC1;
    color: #0278AE;
  }

  `
const Paragraph = styled.p``


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
          value={username}
          onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          handleChangeUsername(event.target.value)
          }
        />
        <InputField
          type="password"
          name="password"
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
        <h3>NEW HERE ?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          ex ratione. Aliquid!
        </p>
        <Button type="submit">SING UP</Button>

        </LeftPanel>
        </Panel>
      </PanelsContainer>

    </Container>

  )
}

export default withHelmet('BDRS | Login')(LoginForm)
