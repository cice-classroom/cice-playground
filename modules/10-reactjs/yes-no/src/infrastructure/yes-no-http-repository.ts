import { YesNoDto } from './yes-no-dto'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNo } from '../domain/yes-no'
import { YesNoRepository } from '../domain/yes-no-repository'
import { Http } from './http'

export class YesNoHttpRepository implements YesNoRepository {
  constructor(
    private readonly yesNoDtoToYesNoMapper: YesNoDtoToYesNoMapper,
    private readonly http: Http
  ) {}

  async find(): Promise<YesNo> {
    const result = await this.http.get<YesNoDto>('https://yesno.wtf/api/')
    return this.yesNoDtoToYesNoMapper.map(result)
  }
}
