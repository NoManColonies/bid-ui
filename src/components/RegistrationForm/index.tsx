import React, { useCallback, ChangeEvent, FormEvent, ReactElement } from 'react'
import styled from 'styled-components'
import InputField from '../InputField'
import { useToken } from '../../contexts/AuthContext'
import { useRegistration } from '../../contexts/RegisterContext'
import withHelmet from '../../utils/withHelmet'

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

const Signup=styled.div`

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
  &h3>{
    font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
  }

  `
const RightPanel=styled.div`

  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
  &h3>{
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
  padding-bottom:3rem;

}
  &p>{
  font-size: 0.95rem;
  padding: 0.7rem 0;
  padding-top:3rem;
}


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
const Content=styled.div`
 color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;

  `

const Title=styled.div`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`

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
          value={username}
          onChange={(event: ChangeEvent<HTMLInputElement>): void =>
            handleChangeUsername(event.target.value)
          }
        />
        <InputField
          type="email"
          name="email"
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>): void =>
            handleChangeEmail(event.target.value)
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
        <InputField
          type="text"
          name="key"
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
