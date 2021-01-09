import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { http } from '../../../core/http/http'
import { TodoDtoToTodoMapper } from './todo-dto-to-todo-mapper'
import { TodoDto } from './todo-dto'
import { TodoToTodoDtoMapper } from './todo-to-todo-dto-mapper'

export class TodoHttpRepository implements TodoRepository {
  constructor(
    private readonly todoDtoToTodoMapper: TodoDtoToTodoMapper,
    private readonly todoToTodoDtoMapper: TodoToTodoDtoMapper
  ) {}

  async findAll(): Promise<Todo[]> {
    const response = await http.get<TodoDto[]>('/todos')
    return response.data.map(todoDto => this.todoDtoToTodoMapper.map(todoDto))
  }

  async create(todo: Todo): Promise<void> {
    await http.post('/todos', this.todoToTodoDtoMapper.map(todo))
  }
}
