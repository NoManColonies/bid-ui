import React, { ReactElement } from 'react'
import { Container, Wrapper, Logo, ActionContainer, Action } from '../NavBar/styles'
import { Link } from 'react-router-dom'

function NavBar(): ReactElement {
  return(
    <Container>
    <Wrapper>
      <Logo />
      Logo
      <ActionContainer>
              <Action>
                <Link to="/">Home</Link>
              </Action>
              <Action>
                <Link to="/bid">Bid</Link>
              </Action>
              <Action>
                <Link to="/product">Product</Link>
              </Action>
              <Action>
                <Link to="/payment">Payment</Link>
              </Action>
            </ActionContainer>
    </Wrapper>
  </Container>
  )
}
export default NavBar
