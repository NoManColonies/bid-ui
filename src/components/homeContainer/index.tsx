import React,{ReactElement   } from 'react'
import styled from 'styled-components'

const Container =styled.div`

  background-color:white;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`

function homeContainer(): ReactElement{
  return(
    <Container>
    </Container>
  )
}
export default homeContainer
