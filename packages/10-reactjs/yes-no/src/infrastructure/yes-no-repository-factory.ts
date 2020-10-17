import { YesNoRepository } from '../domain/yes-no-repository'
import { YesNoHttpRepository } from './yes-no-http-repository'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { Http } from './http'

export class YesNoRepositoryFactory {
  static get(): YesNoRepository {
    return new YesNoHttpRepository(new YesNoDtoToYesNoMapper(), new Http(window.fetch.bind(window)))
  }
}
