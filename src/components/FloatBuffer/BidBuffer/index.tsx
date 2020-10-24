import React, { ReactElement, useEffect } from 'react'
import FloatBuffer from '../../FloatBuffer'
import {
  Wrapper,
  ImageContainer,
  ImageTab,
  ImageList,
  FocusedImage,
  FocusedImageWrapper,
  DetailWrapper,
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
  MerchantProfilePicture
} from './styled'
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
    handleFocusImage,
    currentFocusedImage
  } = useBidBuffer()

  useEffect(() => {
    setTimeout(() => {
      handleAddSubscription(
        { subscription: 'product', topic: uuid, packet: 7 },
        handleBidChannel
      )
    }, 1000)

    return (): void => {
      handleRemoveSubscription(
        { subscription: 'product', topic: uuid, packet: 7 },
        handleBidChannel
      )
      console.log('unmounting')
    }
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
            <p>{currentHighestBid ? currentHighestBid : startingPrice}</p>
          </BidAmountWrapper>
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
                  currentHighestBid
                    ? currentHighestBid + incrementalPrice
                    : startingPrice
                }
                value={bidAmount}
                onChange={handleBidAmountChange}
              />
            </BidInputFieldWrapper>
            <BidAction type="submit">Bid</BidAction>
          </BidFormWrapper>
        </DetailWrapper>
      </Wrapper>
    </FloatBuffer>
  )
}

export default BidBuffer
