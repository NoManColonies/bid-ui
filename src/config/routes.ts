import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Bid: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Bid'))
  },
  Payment: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Product: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Product'))
  }
}
