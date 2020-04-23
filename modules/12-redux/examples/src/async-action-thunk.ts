import { AppDispatch, RootState } from './store'
import { Action as ReduxAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export interface FetchStartAction {
  type: typeof FETCH_START
}

export interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS
  result: number
}

export interface FetchErrorAction {
  type: typeof FETCH_ERROR
  error: Error
}

export const fetchStartAction = (): Action => {
  return {
    type: FETCH_START
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
    type: FETCH_SUCCESS,
    result
  }
}

export const fetchErrorAction = (error: Error): Action => {
  return {
    type: FETCH_ERROR,
    error
  }
}

export type Action = FetchErrorAction | FetchStartAction | FetchSuccessAction

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
