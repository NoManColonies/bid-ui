import React, { ReactElement, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router'
import withHelmet from './utils/withHelmet'
import RegisterContext from './contexts/RegisterContext'
import GlobalStyle from './components/GlobalStyle'

const RegistrationForm = lazy(() => import('./components/RegistrationForm'))
const LoginForm = lazy(() => import('./components/LoginForm'))

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback="...loading">
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
      </Suspense>
    </>
  )
}

export default withHelmet('BDRS | Home')(App)
