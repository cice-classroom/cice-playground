import { YesNoDto } from './yes-no-dto'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNo } from '../domain/yes-no'
import { YesNoRepository } from '../domain/yes-no-repository'
import { Http } from './http'
import { inject, injectable } from 'inversify'
import { HTTP_TYPE, YES_NO_DTO_TO_YES_NO_MAPPER_TYPE } from '../types'

@injectable()
export class YesNoHttpRepository implements YesNoRepository {
  constructor(
    @inject(YES_NO_DTO_TO_YES_NO_MAPPER_TYPE)
    private readonly yesNoDtoToYesNoMapper: YesNoDtoToYesNoMapper,
    @inject(HTTP_TYPE) private readonly http: Http
  ) {}

  async find(): Promise<YesNo> {
    const result = await this.http.get<YesNoDto>('https://yesno.wtf/api/')
    return this.yesNoDtoToYesNoMapper.map(result)
  }
}
