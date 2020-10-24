import React, { ReactElement } from 'react'
import ProductBox from '../components/Product/index'
import withNavbar from '../utils/withNavbar'
import withHelmet from '../utils/withHelmet'
import Footer from '../components/Footer'

function Product(): ReactElement {
  return (
    <>
   <ProductBox/>
   <Footer/>
   </>
  )
}
export default withHelmet('BIDRS | Product')(withNavbar(Product))
