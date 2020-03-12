import { YesNoDto } from './yes-no-dto'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNo } from '../domain/yes-no'
import { YesNoRepository } from '../domain/yes-no-repository'
import { httpClient } from './http-client'

export class YesNoHttpRepository implements YesNoRepository {
  constructor(private readonly yesNoDtoToYesNoMapper: YesNoDtoToYesNoMapper) {}

  async find(): Promise<YesNo> {
    const result = await httpClient.get<YesNoDto>('/')
    return this.yesNoDtoToYesNoMapper.map(result.data)
  }
}
