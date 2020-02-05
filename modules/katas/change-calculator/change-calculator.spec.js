import { ChangeCalculator } from './change-calculator'

describe('bank', () => {
  it('should give me back change', () => {
    const given = 50

    const actual = new ChangeCalculator().calculate(given)

    expect(actual).toEqual([20, 20, 10])
  })
})
