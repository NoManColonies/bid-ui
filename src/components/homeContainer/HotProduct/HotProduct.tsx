
import React, { ReactElement } from 'react'
import
 {Container,
  ProductBox,
  CulumnBox,
  RowBox,
  Product,
  Image,Title}
  from './styled'


function HotProduct(): ReactElement{
  return(
   <div>
     <Container>
     <h1>HOT PRODUCT</h1>
       <ProductBox>

        <CulumnBox>
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

            <Product>
            <Image></Image>
            <Title></Title>
            </Product>
          </RowBox>

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

            <Product>
            <Image></Image>
            <Title></Title>
            </Product>
          </RowBox>


        </CulumnBox>
       </ProductBox>
     </Container>
   </div>

  )
}

export default HotProduct
