import { fizzBuzz } from './fizz-buzz'

describe('fizzBuzz', () => {
  it('should replace a number divisible by 3 by fizz', () => {
    const actual = fizzBuzz(4)

    expect(actual).toEqual([1, 2, 'fizz'])
  })
})
