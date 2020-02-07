import { PrimeNumbersFactorer } from './primer-numbers'

describe('DecomposePrimeNumbers', () => {
  it('should factor a number into prime numbers that multiplied by each other will give back the initial value', () => {
    const given = 10
    const primeNumbersFactorer = new PrimeNumbersFactorer()

    const actual = primeNumbersFactorer.factor(given)

    expect(actual).toEqual([2, 5])
  })
})
