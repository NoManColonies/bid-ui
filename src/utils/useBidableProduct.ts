import { useCallback, useContext, useMemo } from 'react'
import {
  CustomerInterface,
  BidInterface,
  USE_BIDABLE_PRODUCT_RETURN_TYPE
} from '../contexts/BidableContext/BidableContext'
import { BidSpecfication } from '../contexts/BidableContext'

export function useBidableProduct(): USE_BIDABLE_PRODUCT_RETURN_TYPE {
  const { productDetail, dispatchProductDetail } = useContext(BidSpecfication)

  const handleAddBid = useCallback(
    (bid: BidInterface) =>
      dispatchProductDetail({
        type: 'ADD_BID',
        payload: JSON.stringify({ bid })
      }),
    [dispatchProductDetail]
  )

  const handleSetBids = useCallback(
    (bids: BidInterface[]) =>
      dispatchProductDetail({
        type: 'SET_BIDS',
        payload: JSON.stringify({ bids })
      }),
    [dispatchProductDetail]
  )

  const handleSetMerchant = useCallback(
    (merchant: CustomerInterface) =>
      dispatchProductDetail({
        type: 'SET_MERCHANT_NAME',
        payload: JSON.stringify({ merchant })
      }),
    [dispatchProductDetail]
  )

  const handleSetProductName = useCallback(
    (productName: string) =>
      dispatchProductDetail({
        type: 'SET_PRODUCT_NAME',
        payload: JSON.stringify({
          productName
        })
      }),
    [dispatchProductDetail]
  )

  const handleSetEndDate = useCallback(
    (endDate: string) =>
      dispatchProductDetail({
        type: 'SET_END_DATE',
        payload: JSON.stringify({ endDate })
      }),
    [dispatchProductDetail]
  )

  const handleAddProductImage = useCallback(
    (productImage: string) =>
      dispatchProductDetail({
        type: 'ADD_PRODUCT_IMAGE',
        payload: JSON.stringify({
          productImage
        })
      }),
    [dispatchProductDetail]
  )

  const handleSetStartingPrice = useCallback(
    (startingPrice: number) =>
      dispatchProductDetail({
        type: 'SET_STARTING_PRICE',
        payload: JSON.stringify({ startingPrice })
      }),
    [dispatchProductDetail]
  )

  const handleSetIncrementalPrice = useCallback(
    (incrementalPrice: number) =>
      dispatchProductDetail({
        type: 'SET_INCREMENTAL_PRICE',
        payload: JSON.stringify({ incrementalPrice })
      }),
    [dispatchProductDetail]
  )

  const handleFunctions = useMemo(
    () => ({
      handleAddBid,
      handleSetBids,
      handleSetMerchant,
      handleSetProductName,
      handleSetEndDate,
      handleAddProductImage,
      handleSetStartingPrice,
      handleSetIncrementalPrice
    }),
    [
      handleAddBid,
      handleSetBids,
      handleSetMerchant,
      handleSetProductName,
      handleSetEndDate,
      handleAddProductImage,
      handleSetStartingPrice,
      handleSetIncrementalPrice
    ]
  )

  return [productDetail, handleFunctions]
}
