import { useContext, useCallback, useMemo } from 'react'
import {
  EMITTERY_TYPE,
  USE_WEBSOCKET_RETURN_TYPE
} from '../contexts/WebsocketContext/WebsocketContext'
import { SocketContext } from '../contexts/WebsocketContext'

export function useWebsocket(): USE_WEBSOCKET_RETURN_TYPE<EMITTERY_TYPE> {
  const { socket, socketDispatch, ws } = useContext(SocketContext)

  const handleAddSubscription = useCallback(
    (payload, event) => {
      socketDispatch({
        type: 'ADD_SUBSCRIPTION',
        payload: JSON.stringify(payload),
        ws
      })
      socketDispatch({ type: 'ADD_LISTENER', payload, event, ws })
    },
    [socketDispatch, ws]
  )

  const handleRemoveSubscription = useCallback(
    (payload, event) => {
      socketDispatch({
        type: 'REMOVE_SUBSCRIPTION',
        payload: JSON.stringify(payload),
        ws
      })
      socketDispatch({ type: 'REMOVE_LISTENER', payload, event, ws })
    },
    [socketDispatch, ws]
  )

  const socketState = useMemo(
    () => ({
      ws,
      clientLimit: socket.clientLimit,
      cuurentIteration: socket.currentIteration,
      interval: socket.interval,
      subscriptions: socket.subscriptions,
      emitter: socket.emitter
    }),
    [socket, ws]
  )

  const handlerFunctions = useMemo(
    () => ({
      handleAddSubscription,
      handleRemoveSubscription
    }),
    [handleAddSubscription, handleRemoveSubscription]
  )

  return [socketState, handlerFunctions]
}
