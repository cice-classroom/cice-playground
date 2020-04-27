import { Todo } from '../../domain/todo'

type TodoPayload = Pick<Todo, 'id' | 'text'>

interface CreateTodoAction {
  type: 'CREATE_TODO'
  payload: TodoPayload
}

interface EditTodoAction {
  type: 'EDIT_TODO'
  payload: TodoPayload
}

export const createTodo = (payload: TodoPayload): TodoAction => {
  return {
    type: 'CREATE_TODO',
    payload
  }
}

export const editTodo = (payload: TodoPayload): TodoAction => {
  return {
    type: 'EDIT_TODO',
    payload
  }
}

export type TodoAction = CreateTodoAction | EditTodoAction
