import React from 'react'
import {
  setAllTodosVisible,
  setCompletedTodosVisible,
  setTodoTodosVisible
} from '../application/todo-filters/todo-filters-action'
import { useAppDispatch } from '../application/store/store'

export const TodoFilters: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(setAllTodosVisible())}>All</button>
      <button onClick={() => dispatch(setCompletedTodosVisible())}>Completed</button>
      <button onClick={() => dispatch(setTodoTodosVisible())}>Todo</button>
    </div>
  )
}
