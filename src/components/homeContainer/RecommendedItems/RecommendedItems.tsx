
import React, { ReactElement } from 'react'
import {
  Container,
  ProductBox,
  RowBox,
  Product,
  Image,
  Title
} from './styled'


function RecommendedItems(): ReactElement{
  return(
   <div>
     <Container>
     <h1>RecoomendedItems</h1>
     <ProductBox>


          <RowBox>
            <Product>
              <Image></Image>
              <Title></Title>
            </Product>

            <Product>
            <Image></Image>
            <Title></Title>
            </Product>

            <Product>
            <Image></Image>
            <Title></Title>
            </Product>

            <Product>
            <Image></Image>
            <Title></Title>
            </Product>
          </RowBox>

       </ProductBox>
     </Container>
   </div>

  )
}

export default RecommendedItems
