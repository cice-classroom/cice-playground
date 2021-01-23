import { initialTodoState, TodosState } from './todos-state'
import { TodoAction } from './todo-action-creators'

export function todoReducer(state = initialTodoState, action: TodoAction): TodosState {
  switch (action.type) {
    case 'ADD_TODO':
      const nextId = (state.todos.map(x => x.id).sort((a, b) => b - a)[0] ?? 0) + 1
      return {
        todos: [...state.todos, { text: action.text, completed: false, id: nextId }]
      }
    default:
      return state
  }
}
