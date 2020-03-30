import { YesNoImageRequiredException } from './yes-no-image-required-exception'

export class YesNo {
  constructor(readonly image: string, readonly answer: 'yes' | 'no' | 'maybe') {
    if (image.length === 0) {
      throw new YesNoImageRequiredException()
    }
  }
}
