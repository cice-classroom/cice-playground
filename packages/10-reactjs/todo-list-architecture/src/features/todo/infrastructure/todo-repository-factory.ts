import { TodoRepository } from '../domain/todo-repository'
import { TodoHttpRepository } from './todo-http-repository'
import { TodoDtoToTodoMapper } from './todo-dto-to-todo-mapper'
import { TodoToTodoDtoMapper } from './todo-to-todo-dto-mapper'

export class TodoRepositoryFactory {
  static build(): TodoRepository {
    return new TodoHttpRepository(new TodoDtoToTodoMapper(), new TodoToTodoDtoMapper())
  }
}
