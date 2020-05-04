import { even } from './exercise-2'

describe('even', () => {
  it('should get even numbers', async () => {
    const actual = await even([1, 2, 3, 4]).toPromise()

    expect(actual).toBe(4)
  })
})
