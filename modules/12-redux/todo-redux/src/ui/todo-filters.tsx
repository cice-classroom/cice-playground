import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setAllTodosVisible,
  setCompletedTodosVisible,
  setTodoTodosVisible
} from '../application/todo-filters/todo-filters-action'

export const TodoFilters: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(setAllTodosVisible())}>All</button>
      <button onClick={() => dispatch(setCompletedTodosVisible())}>Completed</button>
      <button onClick={() => dispatch(setTodoTodosVisible())}>Todo</button>
    </div>
  )
}
