import { inject, injectable } from 'inversify'
import { YesNoDto } from './yes-no-dto'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNo } from '../domain/yes-no'
import { YesNoRepository } from '../domain/yes-no-repository'
import { Http } from './http'

@injectable()
export class YesNoHttpRepository implements YesNoRepository {
  constructor(
    @inject('HTTP') private readonly http: Http,
    @inject('YES_NO_DTO_TO_YES_NO_MAPPER')
    private readonly yesNoDtoToYesNoMapper: YesNoDtoToYesNoMapper
  ) {}

  async find(): Promise<YesNo> {
    const result = await this.http.get<YesNoDto>('https://yesno.wtf/api/')
    return this.yesNoDtoToYesNoMapper.map(result)
  }
}
