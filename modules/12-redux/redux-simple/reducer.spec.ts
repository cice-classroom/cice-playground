import { reducer } from './reducer'
import { increment } from './action-creators'

describe('reducer', () => {
  it('should increment', () => {
    const actual = reducer(1, increment())

    expect(actual).toBe(2)
  })
})
