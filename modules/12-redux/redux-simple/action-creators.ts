import { DECREMENT, INCREMENT } from './action-types'

export function increment(): Action {
  return {
    type: INCREMENT
  }
}

export function decrement(): Action {
  return {
    type: DECREMENT
  }
}

interface IncrementAction {
  type: typeof INCREMENT
}

interface DecrementAction {
  type: typeof DECREMENT
}

export type Action = IncrementAction | DecrementAction
