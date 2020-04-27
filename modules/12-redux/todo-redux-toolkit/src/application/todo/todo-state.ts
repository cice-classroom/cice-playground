import { Todo } from '../../domain/todo'

export const initialState: TodoState = {
  todos: [
    { id: 1, completed: false, text: 'Hello world' },
    { id: 2, completed: true, text: 'Bye world' }
  ]
}

export interface TodoState {
  todos: Todo[]
}
