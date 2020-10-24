
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container =styled.div`
width:100vw;
height:80vh;
background-color:#f7f7f7;
h1{
  font-weight:800;
  font-size:1.2rem;
  text-transform: uppercase;
  margin-left:9.5rem;
  padding-top:3rem;
  margin-bottom:3rem;

 }

`

const ProductBox =styled.div`
 width:100vw;
 height:80vh;
 display:flex;
 justify-content:center;
 `

const RowBox =styled.div`
 width:80vw;
 height:40vh;
 padding:0;
 display:flex;
 justify-content:center;
 flex-direction:row;


`

const Product =styled.div`
 width:25vw;
 height:50vh;
 margin-left:1.8rem;
 margin-right:1.5rem;


 &:hover{
 box-shadow:2px 2px 4px gray;
 }


`

const Image =styled.div`
 width:100%;
 height:70%;
 background-color:lawngreen;
 padding:0;
 margin:0;
`

 const Title =styled.div`
 padding:0;
 margin:0;
 width:100.4%;
 height:30%;
 background-color:lightgoldenrodyellow;

`


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
