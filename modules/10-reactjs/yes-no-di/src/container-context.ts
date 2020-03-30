import { createContext } from 'react'
import { YesNoRepository } from './domain/yes-no-repository'
import { YesNoHttpRepository } from './infrastructure/yes-no-http-repository'
import { Http } from './infrastructure/http'
import { YesNoDtoToYesNoMapper } from './infrastructure/yes-no-dto-to-yes-no-mapper'

export interface Dependencies {
  yesNoRepository: YesNoRepository
}

export const dependencyTree: Dependencies = {
  yesNoRepository: new YesNoHttpRepository(
    new YesNoDtoToYesNoMapper(),
    new Http(window.fetch.bind(window))
  )
}

export const ContainerContext = createContext<Dependencies>(dependencyTree)
