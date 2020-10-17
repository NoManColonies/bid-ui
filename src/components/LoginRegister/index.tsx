import React, { ReactElement } from 'react'
import LoginForm from '../LoginForm'
import RegisterForm from '../RegistrationForm'

function LoginRegister(): ReactElement {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  )
}
export default LoginRegister
