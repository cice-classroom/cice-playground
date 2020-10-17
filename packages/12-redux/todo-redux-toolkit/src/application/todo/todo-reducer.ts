import { initialState } from './todo-state'
import { createTodo, CreateTodoAction, editTodo, removeTodo } from './todo-action'
import { createReducer } from '@reduxjs/toolkit'

export const todoReducer = createReducer(initialState, {
  [createTodo.type]: (state, action: CreateTodoAction) => {
    state.todos.push({ ...action.payload, completed: false })
  },
  [editTodo.type]: (state, action) => {
    return state.todos.map(todo =>
      todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
    )
  },
  [removeTodo.type]: (state, action) => {
    return state.todos.filter(todo => todo.id !== action.payload.id)
  }
})
