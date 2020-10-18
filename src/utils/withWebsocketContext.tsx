import React, { ComponentType, ReactElement } from 'react'
import WebsocketContext from '../contexts/WebsocketContext'

function withWebsocketContext<T>(
  Component: ComponentType<T>
): (props: T) => ReactElement {
  return (props: T): ReactElement => (
    <WebsocketContext>
      <Component {...props}></Component>
    </WebsocketContext>
  )
}

export default withWebsocketContext
