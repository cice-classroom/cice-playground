import { inject, injectable } from 'inversify'
import { YesNoRepository } from '../domain/yes-no-repository'
import { TYPES } from '../types'
import { YesNo } from '../domain/yes-no'
import { Query } from './query'

// CQRS - Command Query Responsibility Segregation
// Command Pattern
// Facade Pattern
@injectable()
export class GetImageQry implements Query<YesNo> {
  constructor(@inject(TYPES.YES_NO_REPOSITORY) private readonly yesNoRepository: YesNoRepository) {}

  execute() {
    return this.yesNoRepository.find()
  }
}
