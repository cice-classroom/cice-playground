import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './store'

export const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos)

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
