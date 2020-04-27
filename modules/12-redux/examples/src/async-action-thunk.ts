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

export interface FetchErrorAction {
  type: 'FETCH_ERROR'
  error: Error
}

export type Action = FetchErrorAction | FetchStartAction | FetchSuccessAction

export const fetchStartAction = (): Action => {
  return {
    type: 'FETCH_START'
  }
}

export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ReduxAction<string>
>

export const fetchResolve = (): Thunk => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchStartAction())
    setTimeout(() => {
      dispatch(fetchSuccessAction(42))
    }, 1_000)
  }
}

export const fetchSuccessAction = (result: number): Action => {
  return {
    type: 'FETCH_SUCCESS',
    result
  }
}

export const fetchErrorAction = (error: Error): Action => {
  return {
    type: 'FETCH_ERROR',
    error
  }
}

interface State {
  isLoading: boolean
  hasError: boolean
  error?: Error
  result?: number
}

const initialState: State = {
  result: undefined,
  isLoading: false,
  hasError: false,
  error: undefined
}

export const counterReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'FETCH_ERROR':
      return {
        error: action.error,
        isLoading: false,
        hasError: true,
        result: undefined
      }
    case 'FETCH_START':
      return {
        hasError: false,
        isLoading: true,
        error: undefined,
        result: undefined
      }
    case 'FETCH_SUCCESS':
      return {
        error: undefined,
        isLoading: false,
        hasError: false,
        result: action.result
      }
    default:
      return state
  }
}
