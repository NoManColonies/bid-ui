import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ImagesSeller from './ImagesSeller'
import Image from '../../assets/k.jpg'
import Image1 from '../../assets/seller1.jpg'
import Image2 from '../../assets/seller2.jpg'
import Image3 from '../../assets/seller3.jpg'



const Container =styled.div`
 width:100vw;
 height:70vh;
 background-color:#f7f7f7;
 h1{
  font-weight:800;
  font-size:1.2rem;
  text-transform: uppercase;
  margin-left:9.5rem;
  padding-top:3rem;
  margin-bottom:3rem;

 }
`
const Row =styled.div`

  display: flex;
  align-items: center;
  justify-content:center;

  width:100vw;
  height:70;


  `
const Content =styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width:100%;
  height:35vh;

  `

const Box =styled.div`
  width:15vw;
  height:35vh;
  margin-left:2rem;
  margin-right:2rem;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;

 &:hover{
 box-shadow:2px 2px 4px gray;
 }




`
const SocialIcon =styled.div`
  width: 100%;
  height:1.5rem;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  display:flex;
  flex-direction:row;


  i{
  margin-top:1rem;
  padding-bottom:0;
  display: block;
  padding: 10px;
  font-size: 17px;
  color: #0278ae;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  flex:1;
  }

`
const Picture =styled.div`
 display: inline-block;
  margin-bottom:1rem;
  z-index: 1;
  position: relative;
  padding-top:0.5rem;
  `
const TeamContent =styled.div`
`

function PopularSeller(): ReactElement{
  return(
    <Container>
      <h1>Popular seller</h1>
      <Row>
         <Content>
               <Link to="/profile">
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
               </Link>

               <Link to="/profile">
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
               </Link>

               <Link to="/profile">
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
               </Link>

               <Link to="/profile">
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
               </Link>
          </Content>
       </Row>

    </Container>

  )
}

export default PopularSeller
