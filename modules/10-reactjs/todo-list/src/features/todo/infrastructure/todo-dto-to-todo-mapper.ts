import { TodoDto } from './todo-dto'
import { Todo } from '../domain/todo'

export class TodoDtoToTodoMapper {
  map(todoDto: TodoDto): Todo {
    return {
      text: todoDto.title,
      id: todoDto.id,
      completed: todoDto.completed
    }
  }
}
