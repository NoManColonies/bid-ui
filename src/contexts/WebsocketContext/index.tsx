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

  const handleHeartbeatEffect = useCallback(() => {
    console.log(socket.cuurentIteration)

    socketDispatch({
      type: 'SET_CLIENT_TRIES',
      payload: JSON.stringify({
        clientTries: socket.cuurentIteration + 1
      })
    })
  }, [socket.cuurentIteration, socketDispatch])

  const handleHeartbeat = useCallback(() => {
    ws && ws.send(JSON.stringify({ t: 8 }))

    const heartbeatEffect = setTimeout(
      () => handleHeartbeatEffect(),
      socket.serverInterval - socket.clientInterval
    )
    socketDispatch({
      type: 'SET_SERVER_INTERVAL_NUMBER',
      payload: JSON.stringify({
        intervalCode: heartbeatEffect
      })
    })
  }, [socket.serverInterval, socket.clientInterval, handleHeartbeatEffect, ws])

  useEffect(() => {
    if (socket.cuurentIteration > socket.clientLimit) {
      clearInterval(socket.clientIntervalCode)
      clearTimeout(socket.serverIntervalCode)
    }
    if (ws.readyState === 0 || ws.readyState === 1) {
      ws.onmessage = ({ data }: MessageEvent): void => {
        const payload = JSON.parse(data)
        console.log(payload)
        socket.emitter.emit(payload.t.toString(), payload)
        if (payload.t === 0) {
          socketDispatch({
            type: 'SET_CLIENT_ATTEMPTS',
            payload: JSON.stringify({
              clientAttempts: payload.d.clientAttempts
            })
          })
          socketDispatch({
            type: 'SET_CLIENT_INTERVAL',
            payload: JSON.stringify({
              interval: payload.d.clientInterval
            })
          })
          socketDispatch({
            type: 'SET_SERVER_INTERVAL',
            payload: JSON.stringify({
              interval: payload.d.serverInterval
            })
          })
          setTimeout(() => handleHeartbeat(), payload.d.clientInterval)
        } else if (payload.t === 9) {
          clearInterval(socket.clientIntervalCode)
          clearTimeout(socket.serverIntervalCode)
          const hearthbeat: number = setInterval(
            () => handleHeartbeat(),
            socket.clientInterval
          )
          socketDispatch({
            type: 'SET_CLIENT_INTERVAL_NUMBER',
            payload: JSON.stringify({
              intervalCode: hearthbeat
            })
          })
        }
      }
    }
  }, [
    ws.onmessage,
    ws.readyState,
    socket.emitter,
    socket.clientInterval,
    handleHeartbeat,
    socketDispatch,
    socket.clientIntervalCode,
    socket.cuurentIteration,
    socket.clientLimit,
    socket.serverIntervalCode
  ])

  useEffect(() => {
    if (ws.readyState === 2)
      console.log(`closing websocket connection on ${WEBSOCKET_ENDPOINT}...`)
    if (ws.readyState === 3) {
      console.log(`closed websocket connection to the ${WEBSOCKET_ENDPOINT}.`)
      clearInterval(socket.clientIntervalCode)
      clearTimeout(socket.serverIntervalCode)
    }
  }, [ws.readyState, socket.clientIntervalCode, socket.serverIntervalCode])

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
