export type PAYLOAD_TYPE =
  | 'ADD_BID'
  | 'SET_BIDS'
  | 'SET_MERCHANT_NAME'
  | 'SET_PRODUCT_NAME'
  | 'ADD_PRODUCT_IMAGE'
  | 'SET_STARTING_PRICE'
  | 'SET_INCREMENTAL_PRICE'
  | 'SET_END_DATE'
  | 'CLEAR_ALL'

export type USE_BIDABLE_PRODUCT_RETURN_TYPE = [
  BidSpecficationInterface,
  {
    handleAddBid: (bid: BidInterface) => void;
    handleSetBids: (bids: BidInterface[]) => void;
    handleSetMerchant: (merchant: CustomerInterface) => void;
    handleSetProductName: (productName: string) => void;
    handleSetEndDate: (endDate: string) => void;
    handleAddProductImage: (productImage: string) => void;
    handleSetStartingPrice: (startingPrice: number) => void;
    handleSetIncrementalPrice: (incrementalPrice: number) => void;
  }
]

export interface CustomerInterface {
  firstName: string;
  lastName: string;
  uuid: string;
}

export interface BidInterface {
  amount: number;
  customer: CustomerInterface;
}

export interface BidSpecficationInterface {
  bids: BidInterface[];
  merchant: CustomerInterface;
  productName: string;
  endDate: string;
  productImages: string[];
  startingPrice: number;
  incrementalPrice: number;
}

export interface BidSpecficationContextInterface<T> {
  productDetail?: ReducerState<T>;
  dispatchProductDetail?: Dispatch<ReducerAction<T>>;
}

export interface BidContextPropsInterface {
  children: ReactElement | ReactElement[];
}
