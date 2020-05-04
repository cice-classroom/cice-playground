import { double } from './exercise-1'

describe('exercise1', () => {
  it('should double a given array', async () => {
    const given = [1, 2, 3, 4, 5]

    const actual = await double(given).toPromise()

    expect(actual).toEqual(10)
  })
})
