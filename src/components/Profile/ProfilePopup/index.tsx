import React ,{ReactElement}from 'react'
import {Center,
  Background,
  Card,
  Additional,
  Infomation,
  Coords,
  Icon,
  IconWrapper,
  TitleWrapper,
  Title,
  Value,
  General,

} from './styled'

import { faTrophy, faGamepad,faBoxes, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'


function ProfilePopup (): ReactElement{
  return(
    <>
    <Background></Background>
  <Center>


   <Card>
     <Additional>

        <Infomation>
        <h1>Jane Doe</h1>
        <Coords>
        <span>Group Name</span>
        <span>Joined January 2019</span>
        </Coords>

        <Coords>
        <span>Position/Role</span>
        <span>City, Country</span>
        </Coords>
       <IconWrapper>
        <TitleWrapper>
          <Title>Winning</Title>
          <Icon icon={faTrophy}></Icon>
          <Value>2</Value>
        </TitleWrapper>
        <TitleWrapper>
          <Title>Amount</Title>
          <Icon icon={faGamepad}></Icon>
          <Value>27</Value>
        </TitleWrapper>
        <TitleWrapper>
          <Title>Product</Title>
          <Icon icon={faBoxes}></Icon>
          <Value>123</Value>
        </TitleWrapper>
        <TitleWrapper>
          <Title>Ratting</Title>
          <Icon icon={faStarHalfAlt}></Icon>
          <Value>20</Value>
        </TitleWrapper>
      </IconWrapper>
    </Infomation>
     </Additional>

     <General>
        <h1>Jane Doe</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris,
           at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>

     </General>
   </Card>

  </Center>
  </>


  )
}
export default ProfilePopup
