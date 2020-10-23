
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container =styled.div`
width:100vw;
height:90vh;
background-color:#f7f7f7;

h1{
  font-weight:800;
  font-size:1.2rem;
  text-transform: uppercase;
  margin-left:9.5rem;
  padding-top:3.5rem;

 }

`

const ProductBox =styled.div`
 width:100vw;
 height:90vh;
 display:flex;
 justify-content:center;
 margin-top:1rem;

`

const CulumnBox =styled.div`
 width:100vw;
 height:90vh;
 display:flex;
 flex-direction:column;
 justify-content:center;
 margin-right:2rem;





`
const RowBox =styled.div`
 width:100vw;
 height:40vh;
 padding:0;
 display:flex;
 flex-direction:row;
 justify-content:center;
 margin-top:0;

`

const Product =styled.div`
 width:12vw;
 height:30vh;
 background-color:white;
 margin-left:2.8rem;
 margin-right:0.3rem;


 &:hover{
 box-shadow:2px 2px 4px gray;
 }


`

const Image =styled.div`
 width:100%;
 height:70%;
 padding:0;
 margin:0;
`

 const Title =styled.div`
 padding:0;
 margin:0;
 width:100.4%;
 height:30%;
 background-color:#51ADCF;
`
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
