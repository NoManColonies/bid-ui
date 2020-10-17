import React, { ReactElement } from 'react'
import backgroundImage from '../assets/nike_0.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import Container from '../components/homeContainer'
import Footer from '../components/Footer'

function Home(): ReactElement {
  return (
    <div>
      <BackgroundBlock src={backgroundImage}></BackgroundBlock>
      <Container />
      <Footer />
    </div>
  )
}
export default Home
