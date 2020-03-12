import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { http } from '../../../core/http/http'
import { TodoDtoToTodoMapper } from './todo-dto-to-todo-mapper'
import { TodoDto } from './todo-dto'

export class TodoHttpRepository implements TodoRepository {
  constructor(private readonly todoDtoToTodoMapper: TodoDtoToTodoMapper) {}

  async findAll(): Promise<Todo[]> {
    const response = await http.get<TodoDto[]>('/todos')
    return response.data.map(todoDto => this.todoDtoToTodoMapper.map(todoDto))
  }
}
