import { fizzBuzz } from './fizz-buzz'

describe('fizzBuzz', () => {
  it('should replace a number divisible by 3 by fizz', () => {
    const actual = fizzBuzz(3)

    expect(actual).toEqual([1, 2, 'fizz'])
  })

  it('should replace a number divisible by 5 by buzz', () => {
    const actual = fizzBuzz(5)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should replace every number divisible by 3 by fizz', () => {
    const actual = fizzBuzz(6)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz'])
  })
})
