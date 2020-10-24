import { useEffect, useCallback, useState, ChangeEvent, FormEvent } from 'react'
import {
  HEALTH_CHECK,
  VALIDATION_CHECK,
  FETCH_GET,
  FETCH_POST
} from '../services/FetchAPI'
import { useToken } from './useToken'
import { useParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import APIResponse from '../interfaces/APIResponse'
import { AuthorizationHeaderType } from '../contexts/AuthContext/AuthContext'
import { useBidableProduct } from './useBidableProduct'
import {
  BidInterface,
  CustomerInterface
} from '../contexts/BidableContext/BidableContext'

interface UseBidBufferReturnInterface {
  uuid: string;
  bids: BidInterface[];
  productImages: string[];
  merchant: CustomerInterface;
  productName: string;
  currentHighestBid: number;
  bidAmount: number;
  startingPrice: number;
  incrementalPrice: number;
  handleBidAmountChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitBid: (e: FormEvent<HTMLFormElement>) => void;
  handleBidChannel: ({ d }: any) => void;
  handleFocusImage: (index: number) => void;
  currentFocusedImage: number;
}

export function useBidBuffer(): UseBidBufferReturnInterface {
  const [bidAmount, setBidAmount] = useState<number>(0)
  const [rawImagePaths, setRawImagePaths] = useState<string[]>([])
  const [currentHighestBid, setCurrentHighestBid] = useState<number>(0)
  const [currentFocusedImage, setCurrentFocusedImage] = useState<number>(0)
  const { uuid } = useParams()
  const [{ token }, { handleFetchToken }] = useToken()
  const [
    {
      bids,
      productImages,
      merchant,
      productName,
      startingPrice,
      incrementalPrice
    },
    {
      handleAddBid,
      handleSetBids,
      handleSetMerchant,
      handleSetProductName,
      handleSetEndDate,
      handleAddProductImage,
      handleSetStartingPrice,
      handleSetIncrementalPrice
    }
  ] = useBidableProduct()

  const handleFocusImage = useCallback(
    (index: number) => {
      setCurrentFocusedImage(index)
    },
    [setCurrentFocusedImage]
  )

  const handleUploadBid = useCallback(
    () =>
      FETCH_POST<
        {},
        AuthorizationHeaderType,
        { references: string },
        APIResponse<any>
      >(
        'bids',
        {
          // eslint-disable-next-line
          bid_amount: bidAmount,
          // eslint-disable-next-line
          product_uuid: uuid
        },
        {
          Authorization: `Bearer ${token.token}`
        },
        '',
        { references: 'customer' }
      ),
    [token.token, bidAmount, uuid]
  )

  const handleSubmitBid = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      token.token &&
        VALIDATION_CHECK(token.token)
          .then(() => {
            handleUploadBid()
              .then(() => {
                setBidAmount(0)
              })
              .catch((e: AxiosError) => console.error(e))
          })
          .catch(() => handleFetchToken())
    },
    [token.token, setBidAmount, handleFetchToken, handleUploadBid]
  )

  const handleBidAmountChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) =>
      setBidAmount(parseInt(target.value)),
    [setBidAmount]
  )

  const handleBidChannel = useCallback(
    ({ d }): void => {
      switch (d.data.type) {
        case 'new:bid': {
          handleAddBid(d.data.data)
          break
        }
        default:
      }
    },
    [handleAddBid]
  )

  const handleSignImageUrl = useCallback(
    (rawImagePath) => {
      HEALTH_CHECK().then(() =>
        FETCH_GET<{}, undefined, APIResponse<any>>(
          `download/product/${uuid}/${rawImagePath}`,
          {}
        )
          .then(({ data }) => handleAddProductImage(data))
          .catch((e: AxiosError) => console.error(e))
      )
    },
    [uuid, handleAddProductImage]
  )

  useEffect(() => {
    bids.length &&
      setCurrentHighestBid(bids.sort((a, b) => b.amount - a.amount)[0].amount)
  }, [bids, setCurrentHighestBid])

  useEffect(() => {
    HEALTH_CHECK().then(() =>
      FETCH_GET<{}, { references: string }, APIResponse<any>>(
        'products',
        {},
        uuid,
        {
          references: 'bids.customer,customer,productDetail'
        }
      )
        .then(({ data }: APIResponse<any>) => {
          data.bids.length &&
            handleSetBids(
              data.bids.map((bid: any) => ({
                customer: {
                  firstName: bid.customer.first_name,
                  lastName: bid.customer.last_name
                },
                amount: bid.bid_amount
              }))
            )
          handleSetProductName(data.product_name)
          handleSetMerchant({
            firstName: data.customer.first_name,
            lastName: data.customer.last_name
          })
          handleSetEndDate(data.end_data)
          handleSetStartingPrice(data.productDetail.product_bid_start)
          handleSetIncrementalPrice(data.productDetail.product_bid_increment)
          setRawImagePaths(data.product_image.split(','))
        })
        .catch((e: AxiosError) => console.error(e))
    )
  }, [
    uuid,
    handleSetBids,
    handleSetProductName,
    handleSetMerchant,
    handleSetEndDate,
    handleSetStartingPrice,
    handleSetIncrementalPrice,
    setRawImagePaths
  ])

  useEffect(() => {
    rawImagePaths.length &&
      rawImagePaths.forEach((productImage) => handleSignImageUrl(productImage))
  }, [rawImagePaths, handleSignImageUrl])

  useEffect(() => {
    setBidAmount(
      currentHighestBid ? currentHighestBid + incrementalPrice : startingPrice
    )
  }, [currentHighestBid, incrementalPrice, startingPrice])

  return {
    currentHighestBid,
    merchant,
    productName,
    productImages,
    handleBidAmountChange,
    handleSubmitBid,
    bids,
    bidAmount,
    handleBidChannel,
    uuid,
    startingPrice,
    incrementalPrice,
    handleFocusImage,
    currentFocusedImage
  }
}
