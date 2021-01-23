import { Todo } from './todo'

export interface TodosState {
  todos: Todo[]
}

export const initialTodoState: TodosState = {
  todos: []
}
