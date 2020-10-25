import React, { ReactElement, useEffect } from 'react'
import FloatBuffer from '../../FloatBuffer'
import {
  Wrapper,
  ImageContainer,
  ImageTab,
  ImageList,
  FocusedImage,
  FocusedImageWrapper,
  BidDetailWrapper,
  BidAmountWrapper,
  ProductNameHeader,
  BidUserWrapper,
  BidUserList,
  BidFormWrapper,
  BidInputField,
  BidInputFieldWrapper,
  BidAction,
  MerchantWrapper,
  MerchantProfileDetail,
  MerchantProfilePicture,
  DetailWrapper,
  ProductPageAction,
  ProductDetailWrapper,
  ProductSpecificationWrapper,
  ProductDetailHeader,
  ProductTagWrapper
} from './styled'
import { SpecificationTag } from '../NewProductBuffer/styled'
import { useBidBuffer } from '../../../utils/useBidBuffer'
import { useWebsocket } from '../../../utils/useWebsocket'

function BidBuffer(): ReactElement {
  const [, { handleAddSubscription, handleRemoveSubscription }] = useWebsocket()
  const {
    bids,
    productImages,
    productName,
    merchant,
    currentHighestBid,
    bidAmount,
    handleBidAmountChange,
    handleSubmitBid,
    handleBidChannel,
    uuid,
    startingPrice,
    incrementalPrice,
    isOnBidPage,
    isAlreadyBidded,
    specification,
    tagList,
    handleFocusImage,
    currentFocusedImage,
    handleClickNextPage
  } = useBidBuffer()

  useEffect(() => {
    handleAddSubscription(
      { subscription: 'product', topic: uuid, packet: 7 },
      handleBidChannel
    )

    return (): void =>
      handleRemoveSubscription(
        { subscription: 'product', topic: uuid, packet: 7 },
        handleBidChannel
      )
  }, [handleAddSubscription, handleRemoveSubscription, handleBidChannel, uuid])

  return (
    <FloatBuffer width={'1442px'} height={'774px'}>
      <Wrapper>
        <ImageContainer>
          <ImageTab>
            {productImages.length &&
              productImages.map((productImage, index) => (
                <ImageList
                  key={productImage}
                  url={productImage}
                  onClick={(): void => handleFocusImage(index)}
                />
              ))}
          </ImageTab>
          <FocusedImageWrapper>
            {productImages.length &&
              productImages.map((productImage, index) => (
                <FocusedImage
                  key={productImage}
                  url={productImage}
                  focused={index === currentFocusedImage}
                />
              ))}
          </FocusedImageWrapper>
        </ImageContainer>
        <MerchantWrapper>
          <MerchantProfilePicture url={''}></MerchantProfilePicture>
          <MerchantProfileDetail>
            <p>
              {merchant.firstName} {merchant.lastName}
            </p>
            <p>Merchant score</p>
          </MerchantProfileDetail>
        </MerchantWrapper>
        <DetailWrapper>
          <ProductNameHeader>{productName}</ProductNameHeader>
          <BidAmountWrapper>
            <p>Current bid</p>
            <p>$</p>
            <p>
              {currentHighestBid ? currentHighestBid.amount : startingPrice}
            </p>
          </BidAmountWrapper>
          <BidDetailWrapper focused={isOnBidPage}>
            <BidUserWrapper>
              {bids.length
                ? bids.map((bid, index) => (
                    <BidUserList key={index}>
                      <p>{bid.customer.firstName}</p>
                      <p>${bid.amount}</p>
                    </BidUserList>
                  ))
                : ''}
            </BidUserWrapper>
            <BidFormWrapper onSubmit={handleSubmitBid}>
              <BidInputFieldWrapper>
                <p>$</p>
                <BidInputField
                  type="number"
                  min={
                    currentHighestBid.amount
                      ? currentHighestBid.amount + incrementalPrice
                      : startingPrice
                  }
                  value={bidAmount}
                  onChange={handleBidAmountChange}
                  disabled={isAlreadyBidded}
                />
              </BidInputFieldWrapper>
              <BidAction type="submit" disabled={isAlreadyBidded}>
                Bid
              </BidAction>
            </BidFormWrapper>
            <ProductPageAction type="button" onClick={handleClickNextPage}>
              See details
            </ProductPageAction>
          </BidDetailWrapper>
          <ProductDetailWrapper focused={!isOnBidPage}>
            <ProductPageAction type="button" onClick={handleClickNextPage}>
              See bids
            </ProductPageAction>
            <ProductSpecificationWrapper>
              <ProductDetailHeader>Specifications</ProductDetailHeader>
              <ProductTagWrapper>
                {Object.keys(specification).map((tag) => (
                  <SpecificationTag key={tag}>
                    {tag}: {specification[tag]}
                  </SpecificationTag>
                ))}
              </ProductTagWrapper>
            </ProductSpecificationWrapper>
            <ProductSpecificationWrapper>
              <ProductDetailHeader>Shipping details</ProductDetailHeader>
              <ProductTagWrapper>
                <SpecificationTag>Mock shipping detail</SpecificationTag>
              </ProductTagWrapper>
            </ProductSpecificationWrapper>
            <ProductSpecificationWrapper>
              <ProductDetailHeader>Tags</ProductDetailHeader>
              <ProductTagWrapper>
                {tagList.map((tag) => (
                  <SpecificationTag key={tag.tag_name}>
                    #{tag.tag_name}
                  </SpecificationTag>
                ))}
              </ProductTagWrapper>
            </ProductSpecificationWrapper>
          </ProductDetailWrapper>
        </DetailWrapper>
      </Wrapper>
    </FloatBuffer>
  )
}

export default BidBuffer
