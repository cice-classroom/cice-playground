import { reducer } from './reducer'
import { Todo } from './todo'
import { Action } from './action'

describe('reducer', () => {
  it('should add a todo', () => {
    const initialState: Todo[] = []
    const action: Action = { type: 'CREATE_TODO', payload: { id: 1, text: 'foo' } }

    const actual = reducer(initialState, action)

    expect(actual).toEqual([{ id: 1, text: 'foo', completed: false }])
  })

  it('should complete a todo', () => {
    const initialState: Todo[] = [
      { id: 1, text: 'foo', completed: false },
      { id: 2, text: 'bar', completed: false },
    ]
    const action: Action = { type: 'COMPLETE_TODO', payload: { id: 1 } }

    const actual = reducer(initialState, action)

    expect(actual).toEqual([
      { id: 1, text: 'foo', completed: true },
      { id: 2, text: 'bar', completed: false },
    ])
  })
})
