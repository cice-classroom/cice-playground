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
  return{
    type: FETCH_START
  }
}

export const fetchResolve = () : Action => {

}

export const fetchSuccessAction = (result: number): Action => {
  return{
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


