import { useContext } from 'react'
import { ContainerContext} from '../container-context'
import { Dependencies } from "../dependencies";

export function useInject<T extends keyof Dependencies>(dependency: T): Dependencies[T] {
  const container = useContext(ContainerContext)
  return container[dependency]
}
