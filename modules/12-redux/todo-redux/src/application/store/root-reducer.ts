import { combineReducers } from 'redux'
import { todoReducer } from '../todo/todo-reducer'

export const rootReducer = combineReducers({ todoReducer })
