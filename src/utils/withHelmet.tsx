import React, { ComponentType, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

function withHelmet<T>(title: string) {
  return (Component: ComponentType<T>) => (props: T): ReactElement => (
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"></link>
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}

export default withHelmet
