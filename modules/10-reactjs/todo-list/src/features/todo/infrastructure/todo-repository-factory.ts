import { TodoRepository } from '../domain/todo-repository'
import { TodoHttpRepository } from './todo-http-repository'
import { TodoDtoToTodoMapper } from './todo-dto-to-todo-mapper'

export class TodoRepositoryFactory {
  static get(): TodoRepository {
    return new TodoHttpRepository(new TodoDtoToTodoMapper())
  }
}
