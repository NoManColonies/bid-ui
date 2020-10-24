import React, { ReactElement } from 'react'
import withHelmet from '../utils/withHelmet'
import backgroundImage from '../assets/backgraund/nike_0.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import Container from '../components/homeContainer'
import Footer from '../components/Footer'
import withNavbar from '../utils/withNavbar'


function Home(): ReactElement {
  return (
    <div>
      <BackgroundBlock src={backgroundImage}></BackgroundBlock>

      <Container />
      <Footer />
    </div>
  )
}
export default withHelmet('BIDRS | Home')(withNavbar(Home))
