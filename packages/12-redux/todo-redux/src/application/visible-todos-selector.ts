import { RootState } from './store/store'
import { Todo } from '../domain/todo'

export const visibleTodosSelector = (state: RootState): Todo[] => {
  const todos = state.todoReducer.todos
  switch (state.todoFiltersReducer.visibility) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'TODO':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}
