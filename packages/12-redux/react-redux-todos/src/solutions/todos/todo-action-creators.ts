import { ADD_TODO } from './todo-action-types'

interface AddTodoAction {
  type: typeof ADD_TODO
  text: string
}

export type TodoAction = AddTodoAction

export function addTodo(text: string): TodoAction {
  return {
    type: ADD_TODO,
    text
  }
}
