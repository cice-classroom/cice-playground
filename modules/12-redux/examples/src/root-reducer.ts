import {combineReducers  } from 'redux'
import { counterReducer } from './async-action-thunk'

export const rootReducer = combineReducers({counter: counterReducer })
