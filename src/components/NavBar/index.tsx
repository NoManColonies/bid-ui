import React, { ReactElement } from 'react'
import { Container, Wrapper,Box,BoxLogo,Join, ActionContainer, Action } from '../NavBar/styles'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import LogoImage from '../../assets/dollar-coin.svg'

function NavBar(): ReactElement {
  return(
    <Container>
    <Wrapper>
      <Box>
      <BoxLogo>
      <Logo src={LogoImage}/>
      <p>BRS</p>
      </BoxLogo>

      <Join>
        <Action>
           <Link to="/login">Login</Link>
        </Action>
        <Action>
           <Link to="/register">Join</Link>
         </Action>
      </Join>
      </Box>
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
