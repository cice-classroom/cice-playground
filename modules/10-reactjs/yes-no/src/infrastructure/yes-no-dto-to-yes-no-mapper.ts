import { YesNoDto } from './yes-no-dto'
import { YesNo } from '../domain/yes-no'

export class YesNoDtoToYesNoMapper {
  map(yesNoDto: YesNoDto): YesNo {
    return {
      answer: yesNoDto.answer,
      image: yesNoDto.image
    }
  }
}
