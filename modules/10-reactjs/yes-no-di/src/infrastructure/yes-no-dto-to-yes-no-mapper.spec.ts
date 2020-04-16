import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNoMother } from './yes-no-mother'

describe('YesNoDtoToYesNoMapper', () => {
  it('should map', () => {
    const yesNoDtoToYesNoMapper = new YesNoDtoToYesNoMapper()

    const actual = yesNoDtoToYesNoMapper.map(YesNoMother.yesDto())

    expect(actual).toEqual(YesNoMother.yes())
  })
})
