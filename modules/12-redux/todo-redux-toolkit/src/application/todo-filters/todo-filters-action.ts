interface SetAllTodosVisibleAction {
  type: 'SET_ALL_TODOS_VISIBLE'
}

interface SetCompletedTodosVisibleAction {
  type: 'SET_COMPLETED_TODOS_VISIBLE'
}

interface SetTodoTodosVisibleAction {
  type: 'SET_TODO_TODOS_VISIBLE'
}

export type TodoFiltersAction =
  | SetAllTodosVisibleAction
  | SetCompletedTodosVisibleAction
  | SetTodoTodosVisibleAction

export const setAllTodosVisible = (): TodoFiltersAction => {
  return {
    type: 'SET_ALL_TODOS_VISIBLE'
  }
}
export const setCompletedTodosVisible = (): TodoFiltersAction => {
  return {
    type: 'SET_COMPLETED_TODOS_VISIBLE'
  }
}
export const setTodoTodosVisible = (): TodoFiltersAction => {
  return {
    type: 'SET_TODO_TODOS_VISIBLE'
  }
}
