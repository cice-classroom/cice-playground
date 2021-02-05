import { TodoRepository } from '../domain/todo-repository'

export class GetTodosUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute() {
    return this.todoRepository.findAll()
  }
}
