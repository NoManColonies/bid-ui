import { ComponentType } from 'react'

export type PreloadableComponent<T extends ComponentType<any>> = T & {
  preload: () => Promise<void>;
}
