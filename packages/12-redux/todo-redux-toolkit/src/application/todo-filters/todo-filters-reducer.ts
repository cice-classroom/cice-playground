import { initialState } from './todo-filters-state'
import {
  setAllTodosVisible,
  setCompletedTodosVisible,
  setTodoTodosVisible
} from './todo-filters-action'
import { createReducer } from '@reduxjs/toolkit'

export const todoFiltersReducer = createReducer(initialState, {
  [setAllTodosVisible.type]: state => {
    state.visibility = 'ALL'
  },
  [setCompletedTodosVisible.type]: state => {
    state.visibility = 'COMPLETED'
  },
  [setTodoTodosVisible.type]: state => {
    state.visibility = 'TODO'
  }
})
