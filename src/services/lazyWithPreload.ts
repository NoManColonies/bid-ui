import { lazy, ComponentType, createElement } from 'react'
import { PreloadableComponent } from '../interfaces/PreloadableComponent'

const lazyWithPreload = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): PreloadableComponent<T> => {
  let LoadedComponent: T | undefined
  let factoryPromise: Promise<void> | undefined

  const LazyComponent = lazy(factory)

  const loadComponent = (): Promise<void> =>
    factory().then((module) => {
      LoadedComponent = module.default
    })

  const Component = ((props) =>
    createElement(
      LoadedComponent || LazyComponent,
      props
    )) as PreloadableComponent<T>

  Component.preload = (): Promise<void> => factoryPromise || loadComponent()

  return Component
}

export default lazyWithPreload
