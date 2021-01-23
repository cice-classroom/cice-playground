import { AppDispatch, RootState } from './store'
import { Action as ReduxAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

export interface FetchStartAction {
  type: 'FETCH_START'
}

export interface FetchSuccessAction {
  type: 'FETCH_SUCCESS'
  result: number
}

export type Action = FetchStartAction | FetchSuccessAction

export const fetchStartAction = (): Action => {
  return {
    type: 'FETCH_START'
  }
}

export const fetchSuccessAction = (result: number): Action => {
  return {
    type: 'FETCH_SUCCESS',
    result
  }
}

export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ReduxAction<string>
>

export function fetchResolve(): Thunk {
  return (dispatch: AppDispatch, getState) => {
    const state = getState()
    dispatch(fetchStartAction())
    setTimeout(() => {
      dispatch(fetchSuccessAction((state.counter.result ?? 0) + 1))
    }, 1_000)
  }
}

interface State {
  isLoading: boolean
  result?: number
}

const initialState: State = {
  result: undefined,
  isLoading: false
}

export const counterReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        isLoading: true,
        result: undefined
      }
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        result: action.result
      }
    default:
      return state
  }
}
