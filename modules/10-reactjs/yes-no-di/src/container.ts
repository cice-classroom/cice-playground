import 'reflect-metadata'
import { Container } from 'inversify'
import { YesNoHttpRepository } from './infrastructure/yes-no-http-repository'
import { YesNoDtoToYesNoMapper } from './infrastructure/yes-no-dto-to-yes-no-mapper'
import { Http } from './infrastructure/http'
import { YesNoRepository } from './domain/yes-no-repository'
import { TYPES } from './types'
import { GetImageUseCase } from './application/get-image-use-case'

const container = new Container()

container.bind<typeof fetch>(TYPES.FETCHER).toConstantValue(window.fetch.bind(window))
container.bind(TYPES.HTTP).to(Http).inSingletonScope()
container.bind(TYPES.YES_NO_DTO_TO_YES_NO_MAPPER).to(YesNoDtoToYesNoMapper).inSingletonScope()
container.bind<YesNoRepository>(TYPES.YES_NO_REPOSITORY).to(YesNoHttpRepository).inSingletonScope()
container.bind<GetImageUseCase>(TYPES.GET_IMAGE_USE_CASE).to(GetImageUseCase).inSingletonScope()

export { container }
