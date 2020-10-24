import React, { ComponentType, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

function withHelmet<T>(title: string) {
  return (Component: ComponentType<T>) => (props: T): ReactElement => (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap"
          rel="stylesheet"
        ></link>

<link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"
></link>

        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}

export default withHelmet
