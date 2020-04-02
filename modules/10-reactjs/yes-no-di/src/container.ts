import 'reflect-metadata'
import { Container } from 'inversify'
import { FETCHER_TYPE, YES_NO_REPOSITORY_TYPE } from './types'
import { YesNoHttpRepository } from './infrastructure/yes-no-http-repository'
import { YesNoDtoToYesNoMapper } from './infrastructure/yes-no-dto-to-yes-no-mapper'
import { Http } from './infrastructure/http'
import { YesNoRepository } from './domain/yes-no-repository'

export const container = new Container()

container.bind<typeof fetch>(FETCHER_TYPE).toConstantValue(window.fetch.bind(window))
container.bind(Http).toSelf()
container.bind(YesNoDtoToYesNoMapper).toSelf()
container
  .bind<YesNoRepository>(YES_NO_REPOSITORY_TYPE)
  .to(YesNoHttpRepository)
  .inSingletonScope()

console.log(container.get(YES_NO_REPOSITORY_TYPE))
