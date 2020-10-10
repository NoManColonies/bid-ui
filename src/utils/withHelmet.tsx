import React, { ComponentType } from 'react'
import { Helmet } from 'react-helmet'

function withHelmet<T> (title: string) {
  return (Component: ComponentType<T>) => (props: T) => (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}

export default withHelmet
