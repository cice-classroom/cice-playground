import { Todo } from '../../domain/todo'

type CreateTodoPayload = Pick<Todo, 'id' | 'text'>

export interface CreateTodoAction {
  type: 'CREATE_TODO'
  payload: CreateTodoPayload
}

export const createTodo = (payload: CreateTodoPayload): CreateTodoAction => {
  return {
    type: 'CREATE_TODO',
    payload
  }
}

export type TodoAction = CreateTodoAction
