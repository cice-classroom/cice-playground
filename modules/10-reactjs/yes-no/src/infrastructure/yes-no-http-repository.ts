import { YesNoDto } from './yes-no-dto'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNo } from '../domain/yes-no'
import { YesNoRepository } from '../domain/yes-no-repository'

export class YesNoHttpRepository implements YesNoRepository {
  constructor(private readonly yesNoDtoToYesNoMapper: YesNoDtoToYesNoMapper) {}

  async find(): Promise<YesNo> {
    const response = await fetch('https://yesno.wtf/api')
    const result = (await response.json()) as YesNoDto
    return this.yesNoDtoToYesNoMapper.map(result)
  }
}
