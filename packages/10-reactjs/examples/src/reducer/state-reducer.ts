export type Action =
  | { type: 'started' }
  | { type: 'ended' }
  | { type: 'success'; result: number }
  | { type: 'error'; error: Error }

export interface State {
  status: 'pending' | 'error' | 'success' | 'idle'
  error: Error | null
  number: number
}

export function stateReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'started':
      return {
        ...state,
        status: 'pending',
        error: null
      }
    case 'success':
      return {
        ...state,
        status: 'success',
        number: state.number + action.result
      }
    case 'error':
      return {
        ...state,
        status: 'error',
        number: 0,
        error: action.error
      }
    case 'ended':
      return {
        ...state,
        status: 'idle'
      }
  }
}
