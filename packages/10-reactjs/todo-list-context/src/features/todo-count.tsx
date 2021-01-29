import { FC, useContext } from 'react'
import { TodoContext } from './todo-context'

export const TodoCount: FC = () => {
  const { todos } = useContext(TodoContext)

  return <span>{todos.length}</span>
}
