import { useContext } from 'react'
import { ContainerContext, Dependencies } from '../container-context'

export function useInject<T extends keyof Dependencies>(dependency: T): Dependencies[T] {
  const container = useContext(ContainerContext)
  return container[dependency]
}
