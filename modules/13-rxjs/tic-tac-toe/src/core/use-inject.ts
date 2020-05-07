import { useContext } from 'react'
import { ContainerContext } from './container-context'

export const useInject = <Dependency>(id: symbol): Dependency => {
  const context = useContext(ContainerContext)
  return context.get(id)
}
