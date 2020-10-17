import produce from 'immer'

interface ImmerState {
  values: number[]
}

const initialState: ImmerState = {
  values: [1, 2, 3]
}

export const addImmer = (value: number): ImmerAction => {
  return {
    type: 'ADD',
    value
  }
}

export const clearImmer = (): ImmerAction => {
  return {
    type: 'CLEAR'
  }
}

export const replaceSecondImmer = (value: number): ImmerAction => {
  return {
    type: 'REPLACE_SECOND',
    value
  }
}

export type ImmerAction =
  | { type: 'CLEAR' }
  | { type: 'ADD'; value: number }
  | { type: 'REPLACE_SECOND'; value: number }

export function immerReducer(state: ImmerState = initialState, action: ImmerAction): ImmerState {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD':
        draft.values.push(action.value)
        break
      case 'CLEAR':
        draft.values = []
        break
      case 'REPLACE_SECOND':
        draft.values[1] = action.value
        break
    }
  })
}
