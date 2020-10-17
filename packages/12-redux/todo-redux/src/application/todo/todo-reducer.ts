import { initialState, TodoState } from './todo-state'
import { TodoAction } from './todo-action'

export function todoReducer(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        todos: [...state.todos, { ...action.payload, completed: false }]
      }
    case 'EDIT_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        )
      }
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    default:
      return state
  }
}
