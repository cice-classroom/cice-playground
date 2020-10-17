import { Action } from './action-creators'
import { initialState, State } from './state'

export function incrementReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}
