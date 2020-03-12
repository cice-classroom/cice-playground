import { TodoDto } from './todo-dto'
import { Todo } from '../domain/todo'

export class TodoToTodoDtoMapper {
  map(todo: Todo): TodoDto {
    return {
      title: todo.text,
      id: todo.id,
      completed: todo.completed,
      userId: -1
    }
  }
}
