import { Todo } from './todo'

export class TodoService {
  isTodoDuplicated(todos: Todo[], todoText: string) {
    return todos.map((todo) => todo.text).includes(todoText)
  }
}
