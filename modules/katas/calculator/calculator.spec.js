import { Calculator } from './calculator'

describe('Calculator', () => {
  it('should calculate a simple sum', () => {
    const given = '1 + 1'
    const calculator = new Calculator()

    const actual = calculator.calculate(given)

    expect(actual).toBe(2)
  })
})
