import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'
import withHelmet from './utils/withHelmet'
import RegisterContext from './contexts/RegisterContext'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'

function App(): ReactElement {
  return (
    <Switch>
      <Route exact path="/" />
      <RegisterContext>
        <Route exact path="/register">
          <RegistrationForm />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
      </RegisterContext>
    </Switch>
  )
}

export default withHelmet('BDRS | Home')(App)
