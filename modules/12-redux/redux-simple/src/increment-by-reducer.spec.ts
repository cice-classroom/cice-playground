import { incrementByReducer } from './increment-by-reducer'
import { State } from './state'

describe('incrementByReducer', () => {
  it('should increment by a given number', () => {
    const initialState: State = {
      count: 0
    }
    const actual = incrementByReducer(initialState, { type: 'INCREMENT_BY', by: 10 })

    expect(actual.count).toBe(10)
  })
})
