import React, { ReactElement, useCallback, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import InputField from '../InputField'
import { useToken } from '../../contexts/AuthContext'
import { useRegistration } from '../../contexts/RegisterContext'
import withHelmet from '../../utils/withHelmet'

const Button = styled.button``
const Paragraph = styled.p``
const Form = styled.form``

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
    <>
      {/* TODO: Style these loading indicator properly */}
      {loading && <Paragraph>...is loading</Paragraph>}
      {/* FIXME: Remove these temporary debugging component */}
      {credential.token && <Paragraph>{credential.token}</Paragraph>}
      <Form onSubmit={onSubmitLogin}>
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
        <Button type="submit">Login</Button>
      </Form>
    </>
  )
}

export default withHelmet('BDRS | Login')(LoginForm)
