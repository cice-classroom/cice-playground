import { YesNoDto } from './yes-no-dto'
import { YesNo } from '../domain/yes-no'

export class YesNoMother {
  static yesDto(): YesNoDto {
    return {
      forced: false,
      answer: 'yes',
      image: 'irrelevant',
    }
  }

  static yes(): YesNo {
    return {
      answer: 'yes',
      image: 'irrelevant',
    }
  }
}
