import Payload from '../../interfaces/Payload'
import { PAYLOAD_TYPE, SocketType, EMITTERY_TYPE } from './WebsocketContext'
import Emittery from 'emittery'

export const INITIAL_STATE: SocketType<EMITTERY_TYPE> = {
  clientLimit: 0,
  cuurentIteration: 0,
  subscriptions: [],
  emitter: new Emittery(),
  clientInterval: 0,
  serverInterval: 0,
  clientIntervalCode: 0,
  serverIntervalCode: 0,
  _subscriptionQueue: []
}

export function socketReducer(
  state: SocketType<EMITTERY_TYPE>,
  action: Payload<PAYLOAD_TYPE>
): SocketType<EMITTERY_TYPE> {
  switch (action.type) {
    case 'ADD_LISTENER': {
      if (!action.event) {
        return state
      }

      const payload = JSON.parse(action.payload)

      const emitter = state.emitter

      emitter.on(payload.packet.toString(), action.event)

      return { ...state, emitter }
    }
    case 'REMOVE_LISTENER': {
      if (!action.event) {
        return state
      }

      const payload = JSON.parse(action.payload)

      const emitter = state.emitter

      emitter.off(payload.packet.toString(), action.event)

      return { ...state, emitter }
    }
    case 'SET_CLIENT_ATTEMPTS': {
      const payload = JSON.parse(action.payload)

      return { ...state, clientLimit: payload.clientAttempts }
    }
    case 'SET_CLIENT_TRIES': {
      const payload = JSON.parse(action.payload)

      return { ...state, cuurentIteration: payload.clientTries }
    }
    case 'SET_CLIENT_INTERVAL': {
      const payload = JSON.parse(action.payload)

      return { ...state, clientInterval: payload.interval }
    }
    case 'SET_SERVER_INTERVAL': {
      const payload = JSON.parse(action.payload)

      return { ...state, serverInterval: payload.interval }
    }
    case 'SET_CLIENT_INTERVAL_NUMBER': {
      const payload = JSON.parse(action.payload)

      return { ...state, clientIntervalCode: payload.intervalCode }
    }
    case 'SET_SERVER_INTERVAL_NUMBER': {
      const payload = JSON.parse(action.payload)

      return { ...state, serverIntervalCode: payload.intervalCode }
    }
    case 'ADD_SUBSCRIPTION': {
      const payload = JSON.parse(action.payload)
      const subscription = `${payload.subscription}:${payload.topic}`
      const subscriptions = [...state.subscriptions]
      const queue = [...state._subscriptionQueue]
      if (subscriptions.find((filter) => filter === subscription)) {
        return state
      }

      subscriptions.push(subscription)
      queue.push({ t: 1, d: { topic: subscription } })
      return { ...state, subscriptions, _subscriptionQueue: queue }
    }
    case 'REMOVE_SUBSCRIPTION': {
      const payload = JSON.parse(action.payload)
      const subscription = `${payload.subscriptions}:${payload.topic}`
      const subscriptions = [...state.subscriptions]
      const queue = [...state._subscriptionQueue]

      queue.push({ t: 2, d: { topic: subscription } })
      return {
        ...state,
        _subscriptionQueue: queue,
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
