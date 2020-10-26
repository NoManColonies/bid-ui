import React, { ReactElement, useEffect } from 'react'
import { FETCH_GET } from '../../services/FetchAPI'
import {
  Container,
  ProductBox,
  Box,
  Image as ImageBlock,
  Title as TitleWrapper,
  Filter,
  Wrapper,
  SpanWrapper as TagWrapper,
  ColorWrapper,
  BoxWrapper,
  BoxColor,
  TitleHeader
} from './styled'
import APIResponse from '../../interfaces/APIResponse'

function Product(): ReactElement {
  useEffect(() => {
    FETCH_GET<{}, { references: string }, APIResponse<any>>(
      'products',
      {},
      undefined,
      { references: 'bids,tags,specifications' }
    ).then(({ data }: APIResponse<any>) => {
      console.log(data)
    })
  }, [])

  return (
    <Container>
      <h1>Filter items</h1>
      <Wrapper>
        <Filter>
          <h2>BLAND & CATEGORY</h2>
          <TagWrapper>
            <span>#supreme</span>
            <span>#gucci</span>
            <span>#bape</span>
            <span>#off white</span>
            <span>#stüssy</span>
            <span>#diro</span>
            <span>#nike</span>
            <span>#adidas</span>
            <span>#clothing</span>
            <span>#Collectibles</span>
            <span>#shoes</span>
            <span>#accessories</span>
          </TagWrapper>
          <ColorWrapper>
            <h2>COLOR</h2>
            <BoxWrapper>
              <BoxColor color={'black'} />
              <BoxColor color={'#1790C8'} />
              <BoxColor color={'#7BBA3C'} />
              <BoxColor color={'#808080'} />
              <BoxColor color={'#8D429F'} />
              <BoxColor color={'#E7352B'} />
              <BoxColor color={'white'} />
            </BoxWrapper>
          </ColorWrapper>
        </Filter>
        <ProductBox>
          <Box>
            <ImageBlock></ImageBlock>
            <TitleWrapper>
              <TitleHeader>Product name</TitleHeader>
              <p>sdsdsdsdsd</p>
            </TitleWrapper>
          </Box>
          <Box>
            <ImageBlock></ImageBlock>
            <TitleWrapper></TitleWrapper>
          </Box>
          <Box>
            <ImageBlock></ImageBlock>
            <TitleWrapper></TitleWrapper>
          </Box>
          <Box>
            <ImageBlock></ImageBlock>
            <TitleWrapper></TitleWrapper>
          </Box>
          <Box>
            <ImageBlock></ImageBlock>
            <TitleWrapper></TitleWrapper>
          </Box>
          <Box>
            <ImageBlock></ImageBlock>
            <TitleWrapper></TitleWrapper>
          </Box>
        </ProductBox>
      </Wrapper>
    </Container>
  )
}

export default Product
