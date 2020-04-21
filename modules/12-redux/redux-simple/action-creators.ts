import { INCREMENT, INCREMENT_BY } from './action-types'

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

interface IncrementAction {
  type: typeof INCREMENT
}

interface IncrementByAction {
  type: typeof INCREMENT_BY
  by: number
}

export type Actions = IncrementAction | IncrementByAction
