import { inject, injectable } from 'inversify'
import { YesNoRepository } from '../domain/yes-no-repository'
import { TYPES } from '../types'
import { UseCase } from './use-case'
import { YesNo } from '../domain/yes-no'

// Command Pattern
// Facade Pattern
@injectable()
export class GetImageUseCase implements UseCase<YesNo> {
  constructor(@inject(TYPES.YES_NO_REPOSITORY) private readonly yesNoRepository: YesNoRepository) {}

  execute() {
    return this.yesNoRepository.find()
  }
}
