import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import {
  Box,
  Image as ImageBlock,
  Title as TitleWrapper,
  TitleHeader,
  Icon,
  Text,
  AllTitle,
  IconBox,
  SmallImageWrapper,
  SmallImage
} from '../styled'
import { DateRange } from '@styled-icons/material/DateRange'
import { Dollar } from '@styled-icons/boxicons-regular/Dollar'
import { User } from '@styled-icons/boxicons-solid/User'
import { FETCH_GET } from '../../../services/FetchAPI'
import { AxiosError } from 'axios'
import APIResponse from '../../../interfaces/APIResponse'
import { useHistory } from 'react-router-dom'

function Product({ product }: { product: any }): ReactElement {
  const history = useHistory()
  const [isHover, setIsHover] = useState(false)
  const [signedImages, setSignedImages] = useState<any[]>([])
  const [currentLink, setCurrentLink] = useState<number>(0)

  const handleMouseEnter = useCallback(() => setIsHover(true), [setIsHover])

  const handleMouseLeave = useCallback(() => setIsHover(false), [setIsHover])

  const handleMouseEnterImage = useCallback((link) => setCurrentLink(link), [
    setCurrentLink
  ])
  const handleMouseLeaveImage = useCallback(() => setCurrentLink(0), [
    setCurrentLink
  ])

  const handleSignImageUrl = useCallback(
    (rawImagePath: string, uuid: string) =>
      FETCH_GET<{}, undefined, APIResponse<any>>(
        `download/product/${uuid}/${rawImagePath}`,
        {}
      )
        .then(({ data }) => setSignedImages([...signedImages, data]))
        .catch((e: AxiosError) => console.error(e)),
    [signedImages, setSignedImages]
  )

  useEffect(() => {
    console.log(product.product_image)
  }, [product.product_image])

  // useEffect(() => {
  //   console.log(product.product_image.length, signedImages.length)
  // }, [product.product_image.length, signedImages.length])

  useEffect(() => {
    if (product.product_image.length) {
      handleSignImageUrl(product.product_image.pop(), product.uuid)
    }
  }, [product.product_image, handleSignImageUrl, product.uuid])

  return (
    <Box
      key={product.product_name}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(): void => history.push(`/products/${product.uuid}`)}
    >
      {signedImages.map((image: string, index) => (
        <ImageBlock
          key={index}
          url={image}
          thisIndex={index}
          currentIndex={currentLink}
        ></ImageBlock>
      ))}

      <TitleWrapper>
        <SmallImageWrapper hover={isHover}>
          {signedImages.map((image: string, index) => (
            <SmallImage
              key={index}
              url={image}
              onMouseEnter={(): void => handleMouseEnterImage(index)}
              onMouseLeave={handleMouseLeaveImage}
            ></SmallImage>
          ))}
        </SmallImageWrapper>

        <TitleHeader>{product.product_name}</TitleHeader>

        <AllTitle>
          <IconBox>
            <Icon>
              <Dollar size="1rem"></Dollar>
            </Icon>
            <Icon>
              <User size="1rem" />
            </Icon>
            <Icon>
              <DateRange size="1rem" />
            </Icon>
          </IconBox>

          <Text>
            <p>
              {product.bids.length
                ? product.bids[product.bids.length - 1].bid_amount
                : product.productDetail.product_bid_start}
            </p>
            <p>{product.bids.length}</p>
            <p>{product.end_date}</p>
          </Text>
        </AllTitle>
      </TitleWrapper>
    </Box>
  )
}

export default Product
