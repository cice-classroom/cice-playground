import { YesNo } from './yes-no'
import { YesNoImageRequiredException } from './yes-no-image-required-exception'

describe('YesNo', () => {
  it('should have an image', () => {
    expect(() => {
      new YesNo('', 'yes')
    }).toThrowError(new YesNoImageRequiredException())
  })
})
