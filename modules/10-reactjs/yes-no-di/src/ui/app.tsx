import React from 'react'
import { ContainerContext} from '../container-context'
import { YesNoDisplayer } from './yes-no-displayer'
import { dependencyTree } from "../dependency-tree";

export function App() {
  return (
    <ContainerContext.Provider value={dependencyTree}>
      <YesNoDisplayer />
    </ContainerContext.Provider>
  )
}
