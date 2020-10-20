export type PAYLOAD_TYPE =
  | 'ADD_SUBSCRIPTION'
  | 'REMOVE_SUBSCRIPTION'
  | 'ADD_LISTENER'
  | 'REMOVE_LISTENER'
  | 'SET_CLIENT_ATTEMPTS'
  | 'SET_CLIENT_TRIES'
  | 'SET_CLIENT_INTERVAL'
  | 'SET_SERVER_INTERVAL'
  | 'SET_CLIENT_INTERVAL_NUMBER'
  | 'SET_SERVER_INTERVAL_NUMBER'
  | 'CLOSE_CONNECTION'

export type EMITTERY_TYPE = 'OPEN' | 'MESSAGE'

export interface SocketType<T> {
  clientLimit: number;
  cuurentIteration: number;
  clientInterval: number;
  serverInterval: number;
  clientIntervalCode: number;
  serverIntervalCode: number;
  subscriptions: string[];
  emitter: Emittery.Typed<T>;
}

export interface SocketContextType<T> {
  socket?: ReducerState<T>;
  socketDispatch?: Dispatch<ReducerAction<T>>;
  ws?: WebSocket;
}

export interface WebSocketContextType {
  children: ReactElement | ReactElement[];
}

export type USE_WEBSOCKET_RETURN_TYPE<T> = [
  SocketType<T>,
  {
    // handleNewConnection: () => void;
    handleAddSubscription: (payload, event) => void;
    handleRemoveSubscription: (payload, event) => void;
    handleConnectionClose: () => void;
  }
]
