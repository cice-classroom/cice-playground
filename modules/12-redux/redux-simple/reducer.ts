import { Action } from './action-creators'
import { initialState, State } from './state'

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'INCREMENT_BY':
      return { count: state.count + action.by }
    case 'DECREMENT':
      return { count: state.count - 1 }
  }
}
