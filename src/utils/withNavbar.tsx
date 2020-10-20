import React, { ComponentType, ReactElement } from 'react'
import NavBar from '../components/NavBar'

function withNavbar<T>(Component: ComponentType<T>) {
  return (props: T): ReactElement => (
    <>
      <NavBar />
      <Component {...props} />
    </>
  )
}

export default withNavbar
