import { Todo } from '../domain/todo'

export class IsTodoDuplicatedUseCase {
  isTodoDuplicated(todos: Todo[], todoText: string) {
    return todos.map(todo => todo.text).includes(todoText)
  }
}
