import { DECREMENT, INCREMENT, INCREMENT_BY } from './action-types'

export function increment(): Action {
  return {
    type: INCREMENT
  }
}

export function incrementBy(number: number): Action {
  return {
    type: INCREMENT_BY,
    by: number
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

interface IncrementByAction {
  type: typeof INCREMENT_BY
  by: number
}

interface DecrementAction {
  type: typeof DECREMENT
}

export type Action = IncrementAction | IncrementByAction | DecrementAction
