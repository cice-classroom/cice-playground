import { Todo } from './todo'

export interface TodoRepository {
  findAll(): Promise<Todo[]>
  create(todo: Todo): Promise<void>
}
