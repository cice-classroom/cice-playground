import { TodoState } from './todo-state'
import { TodoAction } from './todo-action'

const initialState: TodoState = {
  todos: [{ id: 1, completed: false, text: 'Hello world' }]
}

export function todoReducer(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        todos: [...state.todos, { ...action.payload, completed: false }]
      }
    default:
      return state
  }
}
