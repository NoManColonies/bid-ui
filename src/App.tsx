import React, { ReactElement, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router'
import withHelmet from './utils/withHelmet'
import RegisterContext from './contexts/RegisterContext'
import GlobalStyle from './components/GlobalStyle'
import Home from './pages/Home'
import NavBar from './components/NavBar'

const RegistrationForm = lazy(() => import('./components/RegistrationForm'))
const LoginForm = lazy(() => import('./components/LoginForm'))

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback="...loading">
        <NavBar/>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
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
