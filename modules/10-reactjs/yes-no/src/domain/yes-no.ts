import { YesNoImageRequiredException } from './yes-no-image-required-exception'
import { YesNoImageTooBigException } from './yes-no-image-too-big-exception'

export class YesNo {
  constructor(readonly image: string, readonly answer: 'yes' | 'no' | 'maybe') {
    if (image.length === 0) {
      throw new YesNoImageRequiredException()
    }

    if (image.length > 100) {
      throw new YesNoImageTooBigException()
    }
  }
}
