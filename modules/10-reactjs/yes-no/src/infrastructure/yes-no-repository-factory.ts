import { YesNoRepository } from '../domain/yes-no-repository'
import { YesNoHttpRepository } from './yes-no-http-repository'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'

export class YesNoRepositoryFactory {
  static get(): YesNoRepository {
    return new YesNoHttpRepository(new YesNoDtoToYesNoMapper())
  }
}
