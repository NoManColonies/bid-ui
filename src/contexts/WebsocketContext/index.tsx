import React, {
  createContext,
  useReducer,
  ReactElement,
  useCallback,
  useEffect
} from 'react'
import Payload from '../../interfaces/Payload'
import {
  PAYLOAD_TYPE,
  SocketType,
  SocketContextType,
  WebSocketContextType,
  EMITTERY_TYPE
} from './WebsocketContext'
import Emittery from 'emittery'

export const SocketContext = createContext<
  SocketContextType<SocketType<EMITTERY_TYPE>>
>({})

const ws = new WebSocket('ws://127.0.0.1:3333/adonis-ws')

const INITIAL_STATE: SocketType<EMITTERY_TYPE> = {
  clientLimit: 0,
  cuurentIteration: 0,
  subscriptions: [],
  emitter: new Emittery()
}

function socketReducer(
  state: SocketType<EMITTERY_TYPE>,
  action: Payload<PAYLOAD_TYPE>
): SocketType<EMITTERY_TYPE> {
  switch (action.type) {
    case 'ADD_LISTENER': {
      if (!action.event || !action.ws) {
        return state
      }

      action.ws.addEventListener('message', action.event)

      return state
    }
    case 'REMOVE_LISTENER': {
      if (!action.ws || !action.event) {
        return state
      }

      action.ws.removeEventListener('message', action.event)

      return state
    }
    case 'SET_CLIENT_ATTEMPTS': {
      const payload = JSON.parse(action.payload)

      return { ...state, clientLimit: payload.clientAttempts }
    }
    case 'SET_CLIENT_TRIES': {
      const payload = JSON.parse(action.payload)

      return { ...state, cuurentIteration: payload.clientTries }
    }
    case 'ADD_SUBSCRIPTION': {
      const payload = JSON.parse(action.payload)
      const subscription = `${payload.subscription}:${payload.topic}`
      const subscriptions = [...state.subscriptions]

      subscriptions.push(subscription)
      action.ws &&
        action.ws.send(
          JSON.stringify({
            t: 1,
            d: { topic: subscription }
          })
        )
      return { ...state, subscriptions }
    }
    case 'REMOVE_SUBSCRIPTION': {
      const payload = JSON.parse(action.payload)
      const subscription = `${payload.subscriptions}:${payload.topic}`
      const subscriptions = [...state.subscriptions]

      action.ws &&
        action.ws.send(
          JSON.stringify({
            t: 2,
            d: { topic: subscription }
          })
        )
      return {
        ...state,
        subscriptions: subscriptions.filter((filter) => filter !== subscription)
      }
    }
    case 'CLOSE_CONNECTION': {
      if (!action.ws) {
        return state
      }
      action.ws.close()

      return state
    }
    default:
      return state
  }
}

function WebSocketContext({ children }: WebSocketContextType): ReactElement {
  const [socket, socketDispatch] = useReducer(socketReducer, INITIAL_STATE)

  const handleInitialConnection = useCallback(
    ({ data }: MessageEvent): void => {
      const payload = JSON.parse(data)
      if (payload.t === 0) {
        socketDispatch({
          type: 'SET_CLIENT_ATTEMPTS',
          payload: JSON.stringify({ clientAttempts: payload.d.clientAttempts })
        })
        const hearthbeat = setInterval(() => {
          if (socket.cuurentIteration > socket.clientLimit) {
            clearInterval(hearthbeat)
            socketDispatch({ type: 'CLOSE_CONNECTION', payload: '', ws })
          } else {
            ws && ws.send(JSON.stringify({ t: 8 }))
          }
        }, payload.d.clientInterval)
      }
    },
    [socketDispatch, socket]
  )

  const handlePongResponse = useCallback(
    ({ data }: MessageEvent): void => {
      const payload = JSON.parse(data)
      if (payload.t === 9)
        socketDispatch({
          type: 'SET_CLIENT_TRIES',
          payload: JSON.stringify({
            clientTries: 0
          })
        })
    },
    [socketDispatch]
  )

  const handleNewConnection = useCallback(() => {
    socketDispatch({
      type: 'ADD_LISTENER',
      payload: '',
      event: handleInitialConnection,
      ws
    })

    socketDispatch({
      type: 'ADD_LISTENER',
      payload: '',
      event: handlePongResponse,
      ws
    })
  }, [socketDispatch, handleInitialConnection, handlePongResponse])

  const handleConnectionClose = useCallback(() => {
    socketDispatch({ type: 'CLOSE_CONNECTION', payload: '', ws })
  }, [socketDispatch])

  useEffect(() => {
    handleNewConnection()

    // return (): void => handleConnectionClose()
  }, [handleNewConnection, handleConnectionClose])

  return (
    <SocketContext.Provider
      value={{
        socket,
        socketDispatch,
        ws
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export default WebSocketContext
