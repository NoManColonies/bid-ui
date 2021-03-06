import React, { ReactElement, lazy, Suspense, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import RegisterContext from './contexts/RegisterContext'
import GlobalStyle from './components/GlobalStyle'
import withWebsocketContext from './utils/withWebsocketContext'
import { useWebsocket } from './utils/useWebsocket'
import CredentialBuffer from './components/FloatBuffer/CredebtialBuffer'
import NewProductBuffer from './components/FloatBuffer/NewProductBuffer'
import BidBuffer from './components/FloatBuffer/BidBuffer'
import ProductSpecificationContext from './contexts/ProductSpecificationContext'
import BidableContext from './contexts/BidableContext'

const RegistrationForm = lazy(() => import('./components/RegistrationForm'))
const LoginForm = lazy(() => import('./components/LoginForm'))
const Home = lazy(() => import('./pages/Home'))
const Profile = lazy(() => import('./pages/Profile'))
const Products = lazy(() => import('./pages/Product'))
const ProfileUser = lazy(() => import('./components/Profile/ProfileUser'))

function App(): ReactElement {
  const [, { handleConnectionClose }] = useWebsocket()

  useEffect(() => {
    return (): void => handleConnectionClose()
  }, [handleConnectionClose])

  return (
    <>
      <GlobalStyle />
      <Suspense fallback="...loading">
        <Switch>
          <Route
            exact
            path="/"
            render={(): ReactElement => <Redirect to="/home" />}
          />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route
            path="/home/verification/:uuid"
            render={(): ReactElement => (
              <>
                <Home />
                <CredentialBuffer />
              </>
            )}
          />
          <Route
            path="/home/product/:uuid"
            render={(): ReactElement => (
              <>
                <Home />
                <BidableContext>
                  <BidBuffer />
                </BidableContext>
              </>
            )}
          />
          <Route
            path="/home/product"
            render={(): ReactElement => (
              <>
                <Home />
                <ProductSpecificationContext>
                  <NewProductBuffer />
                </ProductSpecificationContext>
              </>
            )}
          />
          <Route
            path="/home/profile"
            render={(): ReactElement => (
              <>
                <Home />
                <Profile />
              </>
            )}
          />
          <Route
            path="/products/:uuid"
            render={(): ReactElement => (
              <>
                <Products />
                <BidableContext>
                  <BidBuffer />
                </BidableContext>
              </>
            )}
          />
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/profileUser">
            <ProfileUser />
          </Route>
          <Route exact path="/profile">
            <Home />
            <Profile />
          </Route>
          <RegisterContext>
            <Route exact path="/register">
              <RegistrationForm admin={false} />
            </Route>
            <Route path="/register/key">
              <RegistrationForm admin={true} />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
          </RegisterContext>
        </Switch>
      </Suspense>
    </>
  )
}

export default withWebsocketContext(App)
