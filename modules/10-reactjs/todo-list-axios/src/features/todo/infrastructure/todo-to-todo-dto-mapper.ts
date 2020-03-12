import { TodoDto } from './todo-dto'
import { Todo } from '../domain/todo'

export class TodoToTodoDtoMapper {
  map({ completed, id, text }: Todo): TodoDto {
    return {
      title: text,
      id: id,
      completed,
      userId: -1
    }
  }
}
