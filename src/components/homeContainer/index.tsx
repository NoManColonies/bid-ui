import React,{ReactElement   } from 'react'
import styled from 'styled-components'

const Container =styled.div`

  background-color:#E8FFC1;
  align-items: center;

  width: 100vw;
  height: 100vh;


`

function homeContainer(): ReactElement{
  return(
    <Container>
      <i className="far fa-user"></i>
    </Container>
  )
}
export default homeContainer
