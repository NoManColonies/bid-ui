/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import image from '../../../assets/bg1.jpg'
import image2 from '../../../assets/bg2.jpg'
import image3 from '../../../assets/bg3.jpg'
import image4 from '../../../assets/bg4.jpg'


const proprietes ={
   duration: 5000,
   transitionDuration:500,
   infinite:true,
   indicators:true,
   arrows: true
}

const ContainerSlide =styled.div`



 `
 const EachSlide =styled.div`

 `
  const Image =styled.img`
   height: 500px;
  `
  function Slideshow() {
  return(
    <ContainerSlide>
       <Slide {...proprietes}>
         <EachSlide>
           <Image>
           <img src={image} alt="image"/>
           </Image>
         </EachSlide>

         <EachSlide>
         <Image>
           <img src={image2} alt="image2"/>
           </Image>
         </EachSlide>

         <EachSlide>
         <Image>
           <img src={image3} alt="image3"/>
           </Image>
         </EachSlide>

         <EachSlide>
         <Image>
           <img src={image4} alt="image4"/>
           </Image>
         </EachSlide>

       </Slide>
    </ContainerSlide>
  )
}
export default Slideshow
