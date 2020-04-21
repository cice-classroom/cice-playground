import { DECREMENT, INCREMENT, INCREMENT_BY } from './action-types'

export function increment(): Actions {
  return {
    type: INCREMENT
  }
}

export function incrementBy(number: number): Actions {
  return {
    type: INCREMENT_BY,
    by: number
  }
}

export function decrement(): Actions {
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

export type Actions = IncrementAction | IncrementByAction | DecrementAction
