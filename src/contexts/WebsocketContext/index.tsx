import React, {
  createContext,
  useReducer,
  ReactElement,
  useCallback,
  useEffect,
  useState
} from 'react'
import {
  SocketType,
  SocketContextType,
  WebSocketContextType,
  EMITTERY_TYPE
} from './WebsocketContext'
import { INITIAL_STATE, socketReducer } from './SocketContext'

const WEBSOCKET_ENDPOINT = 'ws://127.0.0.1:3333/adonis-ws'

export const SocketContext = createContext<
  SocketContextType<SocketType<EMITTERY_TYPE>>
>({})

function WebSocketContext({ children }: WebSocketContextType): ReactElement {
  const [socket, socketDispatch] = useReducer(socketReducer, INITIAL_STATE)
  const [ws, reconnect] = useState<WebSocket>(new WebSocket(WEBSOCKET_ENDPOINT))
  const [isProcessingQueue, setIsProcessingQueue] = useState<boolean>(false)

  const handleHeartbeatEffect = useCallback(() => {
    socketDispatch({
      type: 'SET_CLIENT_TRIES',
      payload: JSON.stringify({
        clientTries: socket.cuurentIteration + 1
      })
    })
  }, [socket.cuurentIteration, socketDispatch])

  const handleHeartbeat = useCallback(
    (serverInterval, clientInterval) => {
      ws && ws.send(JSON.stringify({ t: 8 }))

      const heartbeatEffect = setTimeout(
        () => handleHeartbeatEffect(),
        serverInterval - clientInterval
      )
      socketDispatch({
        type: 'SET_SERVER_INTERVAL_NUMBER',
        payload: JSON.stringify({
          intervalCode: heartbeatEffect
        })
      })
    },
    [socketDispatch, handleHeartbeatEffect, ws]
  )

  useEffect(() => {
    if (socket.cuurentIteration > socket.clientLimit) {
      clearInterval(socket.clientIntervalCode)
      clearTimeout(socket.serverIntervalCode)
    }
  }, [
    socket.clientLimit,
    socket.cuurentIteration,
    socket.clientIntervalCode,
    socket.serverIntervalCode
  ])

  useEffect(() => {
    if (ws.readyState === 0 || ws.readyState === 1) {
      ws.onmessage = ({ data }: MessageEvent): void => {
        const payload = JSON.parse(data)
        // ! FIXME: Remove before production
        console.log(payload)
        socket.emitter.emit(payload.t.toString(), payload)
        if (payload.t === 0) {
          const { clientAttempts, clientInterval, serverInterval } = payload.d
          socketDispatch({
            type: 'SET_CLIENT_ATTEMPTS',
            payload: JSON.stringify({
              clientAttempts: clientAttempts
            })
          })
          socketDispatch({
            type: 'SET_CLIENT_INTERVAL',
            payload: JSON.stringify({
              interval: clientInterval
            })
          })
          socketDispatch({
            type: 'SET_SERVER_INTERVAL',
            payload: JSON.stringify({
              interval: serverInterval
            })
          })
          setTimeout(
            () => handleHeartbeat(serverInterval, clientInterval),
            clientInterval
          )
        } else if (payload.t === 9) {
          const {
            clientIntervalCode,
            serverIntervalCode,
            clientInterval,
            serverInterval
          } = socket
          clearInterval(clientIntervalCode)
          clearTimeout(serverIntervalCode)
          const hearthbeat: number = setInterval(
            () => handleHeartbeat(serverInterval, clientInterval),
            clientInterval
          )
          socketDispatch({
            type: 'SET_CLIENT_INTERVAL_NUMBER',
            payload: JSON.stringify({
              intervalCode: hearthbeat
            })
          })
        } else if (payload.t === 3 || payload.t === 4) {
          if (ws.readyState === 1 && socket._subscriptionQueue.length > 0) {
            ws.send(JSON.stringify(socket._subscriptionQueue.pop()))
          } else {
            setIsProcessingQueue(false)
          }
        }
      }
    }
  }, [
    ws.onmessage,
    ws.readyState,
    socket.emitter,
    handleHeartbeat,
    socketDispatch,
    socket,
    setIsProcessingQueue
  ])

  useEffect(() => {
    if (
      !isProcessingQueue &&
      ws.readyState === 1 &&
      socket._subscriptionQueue.length === 1
    ) {
      ws.send(JSON.stringify(socket._subscriptionQueue.pop()))
      setIsProcessingQueue(true)
    }
  }, [
    ws.readyState,
    socket._subscriptionQueue,
    isProcessingQueue,
    setIsProcessingQueue
  ])

  useEffect(() => {
    if (ws.readyState === 2)
      console.log(`closing websocket connection to ${WEBSOCKET_ENDPOINT}...`)
    if (ws.readyState === 3) {
      console.log(`closed websocket connection to ${WEBSOCKET_ENDPOINT}.`)
      clearInterval(socket.clientIntervalCode)
      clearTimeout(socket.serverIntervalCode)
    }
  }, [ws.readyState, socket.clientIntervalCode, socket.serverIntervalCode])

  useEffect(() => {
    if (ws.readyState === 3) {
      setTimeout(() => reconnect(new WebSocket(WEBSOCKET_ENDPOINT)), 10000)
    }
  }, [ws.readyState, reconnect])

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
