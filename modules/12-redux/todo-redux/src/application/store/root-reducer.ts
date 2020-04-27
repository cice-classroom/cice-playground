import { combineReducers } from 'redux'
import { todoReducer } from '../todo/todo-reducer'
import { todoFiltersReducer } from '../todo-filters/todo-filters-reducer'

export const rootReducer = combineReducers({ todoReducer, todoFiltersReducer })
