interface PayloadType<T> {
  type: T;
  payload: string;
  event?: (event: MessageEvent) => void;
  ws?: WebSocket;
}

export default PayloadType
