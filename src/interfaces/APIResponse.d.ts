interface APIResponseType<T> {
  status: number;
  error?: string;
  data?: T;
}

export default APIResponseType
