import { initialState, TodoFiltersState } from './todo-filters-state'
import { TodoFiltersAction } from './todo-filters-action'

export const todoFiltersReducer = (
  state: TodoFiltersState = initialState,
  action: TodoFiltersAction
): TodoFiltersState => {
  switch (action.type) {
    case 'SET_ALL_TODOS_VISIBLE':
      return {
        visibility: 'ALL'
      }
    case 'SET_COMPLETED_TODOS_VISIBLE':
      return {
        visibility: 'COMPLETED'
      }
    case 'SET_TODO_TODOS_VISIBLE':
      return {
        visibility: 'TODO'
      }
    default:
      return state
  }
}
