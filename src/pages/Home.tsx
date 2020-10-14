import React,{ReactElement} from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/nike_0.jpg'
import BackgroundBlock from '../components/BackgroundBlock'


const Content = styled.div`
padding:7rem;`


function Home(): ReactElement {
  return (
    <>
      <BackgroundBlock src={backgroundImage}>

      </BackgroundBlock>
      <Content id='content'>

      </Content>
    </>
  )
}
export default Home
