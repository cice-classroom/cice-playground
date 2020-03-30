import { createContext } from 'react'
import { Dependencies } from './dependencies'
import { dependencyTree } from './dependency-tree'

export const ContainerContext = createContext<Dependencies>(dependencyTree)
