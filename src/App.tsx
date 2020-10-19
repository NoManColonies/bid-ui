import React, { ReactElement, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import withHelmet from './utils/withHelmet'
import RegisterContext from './contexts/RegisterContext'
import GlobalStyle from './components/GlobalStyle'
import NavBar from './components/NavBar'

const RegistrationForm = lazy(() => import('./components/RegistrationForm'))
const LoginForm = lazy(() => import('./components/LoginForm'))
const Home = lazy(() => import('./pages/Home'))

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback="...loading">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <RegisterContext>
            <Route exact path="/register">
              <RegistrationForm admin={false} />
            </Route>
            <Route exact path="/register/key">
              <RegistrationForm admin={true} />
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

export default withHelmet('BIDRS')(App)
