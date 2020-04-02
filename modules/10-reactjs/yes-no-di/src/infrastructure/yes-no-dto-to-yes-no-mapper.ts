import { YesNoDto } from './yes-no-dto'
import { YesNo } from '../domain/yes-no'
import { injectable } from 'inversify'

@injectable()
export class YesNoDtoToYesNoMapper {
  map(yesNoDto: YesNoDto): YesNo {
    return new YesNo(yesNoDto.image, yesNoDto.answer)
  }
}
