
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container =styled.div`
width:100vw;
height:100vh;
background-color:purple;
`

function HotProduct(): ReactElement{
  return(
   <div>
     <Container/>
   </div>

  )
}

export default HotProduct
