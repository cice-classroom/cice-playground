import { incrementReducer } from './increment-reducer'
import { increment } from './action-creators'
import { State } from './state'

describe('reducer', () => {
  it('should increment', () => {
    const initialState: State = {
      count: 3
    }

    const actual = incrementReducer(initialState, { type: 'INCREMENT' })

    expect(actual.count).toBe(4)
  })

  it('should decrement', () => {
    const initialState: State = {
      count: 3
    }

    const actual = incrementReducer(initialState, { type: 'DECREMENT' })

    expect(actual.count).toBe(2)
  })
})
