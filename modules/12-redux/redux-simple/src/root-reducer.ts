import { combineReducers } from 'redux'
import { incrementByReducer } from './increment-by-reducer'
import { incrementReducer } from './increment-reducer'

export const rootReducer = combineReducers({ incrementReducer, incrementByReducer })
