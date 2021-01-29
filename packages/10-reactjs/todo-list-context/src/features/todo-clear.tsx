import { FC, useContext } from 'react'
import { TodoContext } from './todo-context'

export const TodoClear: FC = () => {
  const { clearTodos } = useContext(TodoContext)
  return <button onClick={clearTodos}>Clear todos</button>
}
