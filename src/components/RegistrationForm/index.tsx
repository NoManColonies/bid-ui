import React, { useCallback, ChangeEvent, FormEvent, ReactElement } from 'react'
import styled from 'styled-components'
import InputField from '../InputField'
import { useToken } from '../../contexts/AuthContext'
import { useRegistration } from '../../contexts/RegisterContext'
import withHelmet from '../../utils/withHelmet'

const Button = styled.button``
const Paragraph = styled.p``
const Form = styled.form``

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
    <>
      {/* TODO: Style these loading indicator properly */}
      {loading && <Paragraph>...is loading</Paragraph>}
      {/* FIXME: Remove these temporary debugging component */}
      {credential.token && <Paragraph>{credential.token}</Paragraph>}
      <Form onSubmit={onSubmitRegister}>
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
        <Button type="submit">Register</Button>
      </Form>
    </>
  )
}

export default withHelmet('BDRS | Register')(RegistrationForm)
