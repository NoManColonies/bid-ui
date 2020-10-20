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
      socketDispatch({
        type: 'ADD_LISTENER',
        payload: JSON.stringify(payload),
        event,
        ws
      })
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
      socketDispatch({
        type: 'REMOVE_LISTENER',
        payload: JSON.stringify(payload),
        event,
        ws
      })
    },
    [socketDispatch, ws]
  )

  const handleConnectionClose = useCallback(() => {
    socketDispatch({ type: 'CLOSE_CONNECTION', payload: '', ws })
  }, [socketDispatch, ws])

  const socketState = useMemo(
    () => ({
      ws,
      clientLimit: socket.clientLimit,
      cuurentIteration: socket.currentIteration,
      clientInterval: socket.clientInterval,
      serverInterval: socket.serverInterval,
      subscriptions: socket.subscriptions,
      emitter: socket.emitter,
      clientIntervalCode: socket.clientIntervalCode,
      serverIntervalCode: socket.serverIntervalCode
    }),
    [socket, ws]
  )

  const handlerFunctions = useMemo(
    () => ({
      handleAddSubscription,
      handleRemoveSubscription,
      handleConnectionClose
    }),
    [handleAddSubscription, handleRemoveSubscription, handleConnectionClose]
  )

  return [socketState, handlerFunctions]
}
