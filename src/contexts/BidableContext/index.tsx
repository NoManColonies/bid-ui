import React, { ReactElement, createContext, useReducer } from 'react'
import Payload from '../../interfaces/Payload'
import {
  BidSpecficationInterface,
  PAYLOAD_TYPE,
  BidSpecficationContextInterface,
  BidContextPropsInterface
} from './BidableContext'

export const BidSpecfication = createContext<
  BidSpecficationContextInterface<BidSpecficationInterface>
>({})

const INITIAL_STATE: BidSpecficationInterface = {
  bids: [],
  productName: '',
  merchant: { firstName: '', lastName: '' },
  productImages: [],
  startingPrice: 0,
  incrementalPrice: 0,
  endDate: ''
}

function reducer(
  state: BidSpecficationInterface,
  action: Payload<PAYLOAD_TYPE>
): BidSpecficationInterface {
  switch (action.type) {
    case 'ADD_BID': {
      const { bid } = JSON.parse(action.payload)

      return {
        ...state,
        bids: [
          ...state.bids,
          {
            amount: bid.bid_amount,
            customer: {
              firstName: bid.customer.first_name,
              lastName: bid.customer.last_name
            }
          }
        ]
      }
    }
    case 'SET_BIDS': {
      const { bids } = JSON.parse(action.payload)

      return { ...state, bids }
    }
    case 'SET_PRODUCT_NAME': {
      const { productName } = JSON.parse(action.payload)

      return { ...state, productName }
    }
    case 'SET_MERCHANT_NAME': {
      const { merchant } = JSON.parse(action.payload)

      return { ...state, merchant }
    }
    case 'SET_END_DATE': {
      const { endDate } = JSON.parse(action.payload)

      return { ...state, endDate }
    }
    case 'ADD_PRODUCT_IMAGE': {
      const { productImage } = JSON.parse(action.payload)

      return { ...state, productImages: [...state.productImages, productImage] }
    }
    case 'SET_STARTING_PRICE': {
      const { startingPrice } = JSON.parse(action.payload)

      return { ...state, startingPrice }
    }
    case 'SET_INCREMENTAL_PRICE': {
      const { incrementalPrice } = JSON.parse(action.payload)

      return { ...state, incrementalPrice }
    }
    case 'CLEAR_ALL': {
      return INITIAL_STATE
    }
    default:
      return state
  }
}

function BidableContext({ children }: BidContextPropsInterface): ReactElement {
  const [productDetail, dispatchProductDetail] = useReducer(
    reducer,
    INITIAL_STATE
  )

  return (
    <BidSpecfication.Provider value={{ productDetail, dispatchProductDetail }}>
      {children}
    </BidSpecfication.Provider>
  )
}

export default BidableContext
