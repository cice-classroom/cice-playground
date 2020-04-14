import { useContext } from 'react'
import { ContainerContext } from './container-context'

export const useInject = <T>(dependency: symbol): T => {
  const context = useContext(ContainerContext)

  return context.get(dependency)
}
