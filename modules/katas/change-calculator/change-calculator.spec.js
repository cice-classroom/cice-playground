import { ChangeCalculator } from './change-calculator'

describe('bank', () => {
  it('should return the minimum exact change', () => {
    const given = 50

    const actual = new ChangeCalculator().calculate(given)

    expect(actual).toEqual([50])
  })

  it('should return a set of money amounts if there is no exact change', () => {
    const given = 70

    const actual = new ChangeCalculator().calculate(given)

    expect(actual).toEqual([50, 20])
  })
})
