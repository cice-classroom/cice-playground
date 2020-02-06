import { Calculator } from './calculator'

describe('Calculator', () => {
  it('should add two numbers', () => {
    const given = '2 + 2'
    const calculator = new Calculator()

    const actual = calculator.calculate(given)

    expect(actual).toBe(4)
  })

  it('should add more than two numbers', () => {
    const given = '2 + 2 + 1'
    const calculator = new Calculator()

    const actual = calculator.calculate(given)

    expect(actual).toBe(5)
  })

  it('should subtract two numbers', () => {
    const given = '2 - 2'
    const calculator = new Calculator()

    const actual = calculator.calculate(given)

    expect(actual).toBe(0)
  })

  it('should subtract more than two numbers', () => {
    const given = '2 - 2 - 5'
    const calculator = new Calculator()

    const actual = calculator.calculate(given)

    expect(actual).toBe(-5)
  })
})
