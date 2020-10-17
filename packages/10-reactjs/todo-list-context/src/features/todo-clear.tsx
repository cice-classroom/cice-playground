import React, { useContext } from 'react'
import { TodoContext } from './todo-context'

export const TodoClear: React.FC = () => {
  const { clearTodos } = useContext(TodoContext)
  return <button onClick={clearTodos}>Clear todos</button>
}
