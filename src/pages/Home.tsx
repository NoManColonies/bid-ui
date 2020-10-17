import React, { ReactElement } from 'react'
import backgroundImage from '../assets/nike_0.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import Container from '../components/homeContainer'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function Home(): ReactElement {
  return (
    <div>
       <NavBar/>
      <BackgroundBlock src={backgroundImage}></BackgroundBlock>
      <Container />
      <Footer />
    </div>
  )
}
export default Home
