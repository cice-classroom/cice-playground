import { Todo } from './todo'
import { http } from '../core/http/http'

export class TodoRepository {
  async findAll(): Promise<Todo[]> {
    const response = await http.get('/todos')
    return response.data.map((todoDto: any) => {
      return {
        id: todoDto.id,
        text: todoDto.title,
        completed: todoDto.completed,
      }
    })
  }

  async create(todo: Todo): Promise<void> {
    return http.post('/todos', {
      id: todo.id,
      title: todo.text,
      completed: todo.completed,
      userId: 0,
    })
  }
}
