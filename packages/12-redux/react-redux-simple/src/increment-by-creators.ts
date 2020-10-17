import { INCREMENT_BY } from './action-types'

export function incrementBy(number: number): IncrementByAction {
  return {
    type: INCREMENT_BY,
    by: number
  }
}

interface IncrementBy {
  type: typeof INCREMENT_BY
  by: number
}

export type IncrementByAction = IncrementBy
