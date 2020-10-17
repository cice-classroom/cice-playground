import { State, stateReducer } from './state-reducer'

describe('stateReducer', () => {
  it('should handle started action', () => {
    const state: State = {
      status: 'idle',
      number: 0,
      error: null
    }

    const actual = stateReducer(state, { type: 'started' })

    expect(actual).toEqual({
      number: 0,
      status: 'pending',
      error: null
    })
  })
})
