import { initialState, State } from './state'
import { IncrementByAction } from './increment-by-creators'

export function incrementByReducer(state: State = initialState, action: IncrementByAction): State {
  switch (action.type) {
    case 'INCREMENT_BY':
      return { count: state.count + action.by }
    default:
      return state
  }
}
