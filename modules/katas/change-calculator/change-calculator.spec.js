import { ChangeCalculator } from './change-calculator'

describe('bank', () => {
  it('should return the minimum exact change', () => {
    const given = 50

    const actual = new ChangeCalculator().calculate(given)

    expect(actual).toEqual([50])
  })
})
