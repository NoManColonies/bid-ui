import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import ImagesSeller from './ImagesSeller'
import Image from '../../../assets/seller/k.jpg'
import Image1 from '../../../assets/seller/seller1.jpg'
import Image2 from '../../../assets/seller/seller2.jpg'
import Image3 from '../../../assets/seller/seller3.jpg'
import {
  Container,
  Row,
  Content,
  Box,
  SocialIcon,
  Picture,
  TeamContent,
  SocialIconWrapper
} from './styled'
import {
  faTrophy,
  faGamepad,
  faBoxes,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons'

function PopularSeller(): ReactElement {
  return (
    <Container>
      <h1>Popular seller</h1>
      <Row>
        <Content>
          <Link to="/home/profile">
            <Box>
              <Picture>
                <ImagesSeller src={Image} />
              </Picture>
              <TeamContent>
                <h3>Keng kutsu</h3>
                <h4>Iam a chubbyboy</h4>
              </TeamContent>
              <SocialIconWrapper>
                <SocialIcon icon={faTrophy}></SocialIcon>
                <SocialIcon icon={faGamepad}></SocialIcon>
                <SocialIcon icon={faBoxes}></SocialIcon>
                <SocialIcon icon={faStarHalfAlt}></SocialIcon>
              </SocialIconWrapper>
            </Box>
          </Link>
          <Link to="/home/profile">
            <Box>
              <Picture>
                <ImagesSeller src={Image1} />
              </Picture>
              <TeamContent>
                <h3>Keng kutsu</h3>
                <h4>Iam a chubbyboy</h4>
              </TeamContent>
              <SocialIconWrapper>
                <SocialIcon icon={faTrophy}></SocialIcon>
                <SocialIcon icon={faGamepad}></SocialIcon>
                <SocialIcon icon={faBoxes}></SocialIcon>
                <SocialIcon icon={faStarHalfAlt}></SocialIcon>
              </SocialIconWrapper>
            </Box>
          </Link>
          <Link to="/home/profile">
            <Box>
              <Picture>
                <ImagesSeller src={Image2} />
              </Picture>
              <TeamContent>
                <h3>Keng kutsu</h3>
                <h4>Iam a chubbyboy</h4>
              </TeamContent>
              <SocialIconWrapper>
                <SocialIcon icon={faTrophy}></SocialIcon>
                <SocialIcon icon={faGamepad}></SocialIcon>
                <SocialIcon icon={faBoxes}></SocialIcon>
                <SocialIcon icon={faStarHalfAlt}></SocialIcon>
              </SocialIconWrapper>
            </Box>
          </Link>
          <Link to="/home/profile">
            <Box>
              <Picture>
                <ImagesSeller src={Image3} />
              </Picture>
              <TeamContent>
                <h3>Keng kutsu</h3>
                <h4>Iam a chubbyboy</h4>
              </TeamContent>
              <SocialIconWrapper>
                <SocialIcon icon={faTrophy}></SocialIcon>
                <SocialIcon icon={faGamepad}></SocialIcon>
                <SocialIcon icon={faBoxes}></SocialIcon>
                <SocialIcon icon={faStarHalfAlt}></SocialIcon>
              </SocialIconWrapper>
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
              <SocialIconWrapper>
                <SocialIcon icon={faTrophy}></SocialIcon>
                <SocialIcon icon={faGamepad}></SocialIcon>
                <SocialIcon icon={faBoxes}></SocialIcon>
                <SocialIcon icon={faStarHalfAlt}></SocialIcon>
              </SocialIconWrapper>
            </Box>
          </Link>
        </Content>
      </Row>
    </Container>
  )
}

export default PopularSeller
