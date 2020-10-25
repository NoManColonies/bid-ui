import React, { ReactElement,useEffect } from 'react'
import {FETCH_GET} from '../../services/FetchAPI'
import
 {Container,
  ProductBox,
  CulumnBox,
  RowBox,
  Box,
  Image,
  Title,
  Filter,
  Wrapper,
  SpanWrapper,
  ColorWrapper,
  BoxWrapper,
  BoxColor,
}
  from './styled'
  import APIResponse from '../../interfaces/APIResponse'


function Product(): ReactElement {
  useEffect(() => {
  FETCH_GET<{} ,undefined, APIResponse<any>>(
    'products',
    {}
  ).then((Response)=>{
    console.log(Response)
  })
  },[])
    return (
      <Container>
      <h1>Filter items</h1>
      <Wrapper>
        <Filter>
          <h2>BLAND & CATEGORY</h2>
          <SpanWrapper>
          <span>
           #supreme
          </span>
          <span>
           #gucci
          </span>
          <span>
           #bape
          </span>
          <span>
           #off white
          </span>

          <span>
           #stüssy
          </span>
          <span>
           #diro
          </span>
          <span>
           #nike
          </span>
          <span>
           #adidas
          </span>

          <span>
           #clothing
          </span>
          <span>
           #Collectibles
          </span>
          <span>
           #shoes
          </span>
          <span>
           #accessories
          </span>

          </SpanWrapper>
          <ColorWrapper>

          <h2>COLOR</h2>
          <BoxWrapper>
            <BoxColor color={'black'}/>
            <BoxColor color={'#1790C8'}/>
            <BoxColor color={'#7BBA3C'}/>
            <BoxColor color={'#808080'}/>
            <BoxColor color={'#8D429F'}/>
            <BoxColor color={'#E7352B'}/>
            <BoxColor color={'white'}/>


          </BoxWrapper>
          </ColorWrapper>
        </Filter>
        <ProductBox>

         <CulumnBox>
           <RowBox>
             <Box>
               <Image></Image>
               <Title></Title>
             </Box>

             <Box>
             <Image></Image>
             <Title></Title>
             </Box>

             <Box>
             <Image></Image>
             <Title></Title>
             </Box>

           </RowBox>

           <RowBox>
             <Box>
               <Image></Image>
               <Title></Title>
             </Box>

             <Box>
             <Image></Image>
             <Title></Title>
             </Box>

             <Box>
             <Image></Image>
             <Title></Title>
             </Box>

           </RowBox>


         </CulumnBox>
        </ProductBox>
        </Wrapper>

      </Container>

    )
  }
  export default Product
