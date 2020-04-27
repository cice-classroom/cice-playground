import { combineReducers } from 'redux'
import { counterReducer } from './async-action-thunk'
import { immerReducer } from './immer'

export const rootReducer = combineReducers({ counter: counterReducer, immer: immerReducer })
