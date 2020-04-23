import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../application/store/store'

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos)
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  )
}
