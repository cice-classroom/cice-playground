import React, { useContext } from 'react'
import { TodoContext } from './todo-context'

export const TodoCount: React.FC = () => {
  const { todos } = useContext(TodoContext)

  return <span>{todos.length}</span>
}
