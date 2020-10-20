import React, { ReactElement } from 'react'
import {
  Container,
  Content,
  Title,
  Box,
  Menu,
  ActionContainer,
  Action,
  Address,
  Contact,
  User1,
  User2,
  Email,
  Tel,
  Social
} from '../Footer/styled'
import { Link } from 'react-router-dom'

function Footer(): ReactElement {
  return (
    <Container>
      <Content>
        <Title>
          <Box>
            <Link to="/">
              <h3>BIDBRS</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </Box>
          <Menu>
            <h3>EXPLORE</h3>
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
          </Menu>
          <Address>
            <h3>VISIT</h3>
            <p>
              College of Arts, Media and Technology 239 Huaykaew Rd., Suthep,
              Muang, Chiang Mai 50200 Tel.053-920299 Fax.053-941803
            </p>
          </Address>
          <Contact>
            <h3>CONTACT US</h3>
            <User1>
              <i className="far fa-user"></i>
              <p> Katsu Miyajima</p>
            </User1>
            <User2>
              <i className="far fa-user"></i>
              <p> Walaluck khamnoi</p>
            </User2>
            <Email>
              <i className="far fa-envelope"></i>
              <p> BidBRS@gmail.com</p>
            </Email>
            <Tel>
              <i className="fas fa-phone-alt"></i>
              <p> 053456234</p>
            </Tel>
          </Contact>
        </Title>
      </Content>
      <Social>
        <i className="fab fa-whatsapp"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-instagram"></i>
      </Social>
    </Container>
  )
}

export default Footer
