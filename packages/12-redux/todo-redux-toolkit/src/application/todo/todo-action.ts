import { Todo } from '../../domain/todo'
import { createAction } from '@reduxjs/toolkit'

export type TodoPayload = Pick<Todo, 'id' | 'text'>

export interface CreateTodoAction {
  type: 'CREATE_TODO'
  payload: TodoPayload
}

export interface EditTodoAction {
  type: 'EDIT_TODO'
  payload: TodoPayload
}

export interface RemoveTodoAction {
  type: 'REMOVE_TODO'
  payload: {
    id: number
  }
}

export const createTodo = createAction<TodoPayload>('CREATE_TODO')
export const editTodo = createAction<TodoPayload>('EDIT_TODO')
export const removeTodo = createAction<{ id: number }>('REMOVE_TODO')

export type TodoAction = CreateTodoAction | EditTodoAction | RemoveTodoAction
