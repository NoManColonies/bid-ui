import React, { ReactElement, useEffect, useState, useCallback } from 'react'
import { FETCH_GET } from '../../services/FetchAPI'
import {
  Container,
  ProductBox,
  Filter,
  Wrapper,
  SpanWrapper as TagWrapper,
  ColorWrapper,
  BoxWrapper,
  BoxColor
} from './styled'
import APIResponse from '../../interfaces/APIResponse'
import ProductWrapper from './Product'

function Product(): ReactElement {
  const [products, setProducts] = useState<any[]>([])
  const [currentFilters, setCurrentFilters] = useState<string[]>([])
  const [recommendedFilters, setRecommendedFilters] = useState<string[]>([])

  const handleSelectTag = useCallback(
    (tag: string) => {
      setCurrentFilters([...currentFilters, tag])
      setRecommendedFilters(
        recommendedFilters.filter((filter) => filter !== tag)
      )
    },
    [
      setCurrentFilters,
      currentFilters,
      setRecommendedFilters,
      recommendedFilters
    ]
  )

  const handleDeselectTag = useCallback(
    (tag: string) => {
      setCurrentFilters(currentFilters.filter((filter) => tag !== filter))
      setRecommendedFilters([...recommendedFilters, tag])
    },
    [
      currentFilters,
      setCurrentFilters,
      setRecommendedFilters,
      recommendedFilters
    ]
  )

  const handleFetchProducts = useCallback(
    (tags?: string) =>
      FETCH_GET<{}, { references: string; tags?: string }, APIResponse<any>>(
        tags ? 'products/tags' : 'products',
        {},
        undefined,
        { references: 'bids,tags,specifications,productDetail', tags }
      ).then(({ data }: APIResponse<any>) => {
        setProducts([])
        const filteredProducts = data.filter((filter: any) => !!filter.tags.length)
        const products = (tags ? filteredProducts : data).map(
          (product: any) => {
            const date = new Date(product.end_date)

            const images = product.product_image.split(',')

            return {
              ...product,
              // eslint-disable-next-line
              end_date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
              // eslint-disable-next-line
              product_image: images
            }
          }
        )
        setProducts(products)
      }),
    [setProducts]
  )

  useEffect(() => {
    FETCH_GET<{}, undefined, APIResponse<any>>(
      'tags/sort',
      {}
    ).then(({ data }: APIResponse<any>) => setRecommendedFilters(data))
  }, [setRecommendedFilters])

  useEffect(() => {
    handleFetchProducts(currentFilters.join(','))
  }, [handleFetchProducts, currentFilters])

  return (
    <Container>
      <h1>Filter items</h1>
      <Wrapper>
        <Filter>
          <h2>CURRENT FILTERS</h2>
          <TagWrapper>
            {currentFilters.map((filter) => (
              <span
                key={filter}
                onClick={(): void => handleDeselectTag(filter)}
              >
                #{filter}
              </span>
            ))}
          </TagWrapper>
          <h2>BLAND & CATEGORY</h2>
          <TagWrapper>
            {recommendedFilters.map((filter) => (
              <span key={filter} onClick={(): void => handleSelectTag(filter)}>
                #{filter}
              </span>
            ))}
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
          {products.map((product, index) => (
            <ProductWrapper key={index} product={product} />
          ))}
        </ProductBox>
      </Wrapper>
    </Container>
  )
}

export default Product
