import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 40vh;
  background-color: #51adcf;
  color: aliceblue;
  display: flex;flex-direction: column;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30vh;
  font-family: 'Josefin Sans', sans-serif;

`
const Title = styled.div`
  display: flex;
  padding-left: 4rem;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  flex: 1;
  width: 100%;
  height: 30vh;
`

const Box = styled.div`
  width: 25vw;
  height: 30vh;
  font-family: 'Josefin Sans', sans-serif;
  padding-right:5rem;

  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    font-style: oblique;
    font-family: 'Josefin Sans', sans-serif;
  }
  p {
    width: 25vw;
    height: 20vh;
    font-size: 0.8rem;
    line-height: 1.6;
    font-family: 'Josefin Sans', sans-serif;
  }
`
const Menu = styled.div`
  width: 10vw;
  height: 30vh;

  display: flex;
  flex-direction: column;
  padding-right:3rem;
  font-family: 'Josefin Sans', sans-serif;

  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    font-style: oblique;
    font-family: 'Josefin Sans', sans-serif;
  }
`
const ActionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 0.7rem;

`
const Action = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`
const Address = styled.div`
  margin-bottom: 0.5rem;
  width: 25vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  padding-right:4rem;

  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    font-style: oblique;
    font-family: 'Josefin Sans', sans-serif;
  }
  p {
    width: 25vw;
    height: 20vh;
    font-size: 0.8rem;
    line-height: 1.6;
    font-family: 'Josefin Sans', sans-serif;
  }
`
const Contact = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  width: 15vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  padding-right:2rem;
  font-family: 'Josefin Sans', sans-serif;
  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    font-style: oblique;
    font-family: 'Josefin Sans', sans-serif;
  }
  p {

    line-height: 1.6;
    font-size: 0.8rem;
    font-family: 'Josefin Sans', sans-serif;
    padding-left:0.5rem
   }
`

const User1 = styled.div`
display: flex;
  flex-direction: row;
  margin-bottom:0.5rem;
`
const User2 = styled.div`
display: flex;
  flex-direction: row;
  margin-bottom:0.5rem;
`
const Email = styled.div`
display: flex;
  flex-direction: row;
  margin-bottom:0.5rem;
`
const Tel = styled.div`
display: flex;
  flex-direction: row;
  margin-bottom:0.5rem;
`

const Social =styled.div`
 i{
   width:50px;
   height:50px;
 }
`

function Footer(): ReactElement {
  return (
    <Container>
      <Content>
        <Title>
          <Box>
            <h3>BIDBRS</h3>
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
            <i className="far fa-user"></i><p>  Katsu Miyajima</p>
            </User1>
            <User2>
            <i className="far fa-user"></i><p>  Walaluck khamnoi</p>
            </User2>
            <Email>
            <i className="far fa-envelope"></i><p> BidBRS@gmail.com</p>
            </Email>
            <Tel>
            <i className="fas fa-phone-alt"></i><p> 053456234</p>
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
