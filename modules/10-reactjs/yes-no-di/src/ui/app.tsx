import React from 'react'
import { ContainerContext, dependencyTree } from '../container-context'
import { YesNoDisplayer } from './yes-no-displayer'

export function App() {
  return (
    <ContainerContext.Provider value={dependencyTree}>
      <YesNoDisplayer />
    </ContainerContext.Provider>
  )
}
