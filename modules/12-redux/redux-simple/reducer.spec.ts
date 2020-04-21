import { incrementReducer } from './increment-reducer'
import { increment } from './action-creators'

describe('reducer', () => {
  it('should increment', () => {
    const actual = incrementReducer(1, increment())

    expect(actual).toBe(2)
  })
})
