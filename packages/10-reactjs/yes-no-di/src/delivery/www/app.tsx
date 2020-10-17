import React from 'react'
import { YesNoDisplayer } from './yes-no-displayer'
import { ContainerContext } from './container-context'
import { container } from '../../container'

export const App: React.FC = () => {
  return (
    <ContainerContext.Provider value={container}>
      <YesNoDisplayer />
    </ContainerContext.Provider>
  )
}
