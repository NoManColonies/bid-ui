import React, { ReactElement } from 'react'
import styled from 'styled-components'
import ImagesSeller from './ImagesSeller'
import Image from '../../assets/k.jpg'
import Image1 from '../../assets/seller1.jpg'
import Image2 from '../../assets/seller2.jpg'
import Image3 from '../../assets/seller3.jpg'



const Container =styled.div`
 width:100vw;
height:100vh;
background-color:yellow;

h1{
  font-weight:800;
  font-size:1.2rem;
  text-transform: uppercase;
  margin-left:2.7rem;
  padding-top:2rem;


}

`
const Row =styled.div`
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  width:100%;
  height:100%;
  margin-left:1.8rem;
  margin-right:1rem;
  `
const Content =styled.div`

  display:flex;
  flex-direction:row;
  width:100%;
  height:100%;

  `

const Box =styled.div`
  width:15vw;
  height:30vh;
  padding:1rem 0.5rem 0.5rem 0.5rem;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin:1rem 1rem 1rem 1rem;


`
const SocialIcon =styled.div`
   width: 100%;
  padding: 0;
  margin: 0;
  background-color: #1369ce;
  position: absolute;
  bottom: 1rem;
  left: 0;
  transition: all 0.5s ease-in-out 0s;
  display:flex;
  flex-direction:row;


  i{
  display: block;
  padding: 10px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  color: #1369ce;
  flex:1;
  }
  &:hover{
    bottom:0;
    background-color: #f7f5ec;
  }
`
const Picture =styled.div`
 display: inline-block;
  margin-bottom:1rem;
  z-index: 1;
  position: relative;
  `
const TeamContent =styled.div`
`

function PopularSeller(): ReactElement{
  return(
    <Container>
      <h1>Popular seller</h1>
      <Row>
         <Content>
               <Box>
                <Picture>
                <ImagesSeller src={Image} />
                </Picture>
                <TeamContent>
               <h3>Keng kutsu</h3>
               <h4>Iam a chubbyboy</h4>
               </TeamContent>
               <SocialIcon>
               <i className="fa fa-trophy"></i>
               <i className="fa fa-gamepad"></i>
               <i className="fas fa-boxes"></i>
               <i className="fas fa-star-half-alt"></i>
               </SocialIcon>
               </Box>

               <Box>
                <Picture>
                <ImagesSeller src={Image1} />
                </Picture>
                <TeamContent>
                <h3>Keng kutsu</h3>
                <h4>Iam a chubbyboy</h4>
                </TeamContent>
                <SocialIcon>
               <i className="fa fa-trophy"></i>
               <i className="fa fa-gamepad"></i>
               <i className="fas fa-boxes"></i>
               <i className="fas fa-star-half-alt"></i>
               </SocialIcon>
               </Box>

               <Box>
                <Picture>
                <ImagesSeller src={Image2} />
                </Picture>
                <TeamContent>
                <h3>Keng kutsu</h3>
                <h4>Iam a chubbyboy</h4>
                </TeamContent>
                <SocialIcon>
               <i className="fa fa-trophy"></i>
               <i className="fa fa-gamepad"></i>
               <i className="fas fa-boxes"></i>
               <i className="fas fa-star-half-alt"></i>
               </SocialIcon>
               </Box>

               <Box>
                <Picture>
                <ImagesSeller src={Image3} />
                </Picture>
                <TeamContent>
                <h3>Keng kutsu</h3>
                <h4>Iam a chubbyboy</h4>
                </TeamContent>
                <SocialIcon>
               <i className="fa fa-trophy"></i>
               <i className="fa fa-gamepad"></i>
               <i className="fas fa-boxes"></i>
               <i className="fas fa-star-half-alt"></i>
               </SocialIcon>
                </Box>

               <Box>
                <Picture>
                <ImagesSeller src={Image} />
                </Picture>
                <TeamContent>
                <h3>Keng kutsu</h3>
                <h4>Iam a chubbyboy</h4>
                </TeamContent>
                <SocialIcon>
               <i className="fa fa-trophy"></i>
               <i className="fa fa-gamepad"></i>
               <i className="fas fa-boxes"></i>
               <i className="fas fa-star-half-alt"></i>
               </SocialIcon>
               </Box>
          </Content>
       </Row>

    </Container>

  )
}

export default PopularSeller
