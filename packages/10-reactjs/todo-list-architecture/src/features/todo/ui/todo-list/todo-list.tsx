import { Todo as TodoModel } from '../../domain/todo'
import { Id } from '../../domain/id'
import { Todo } from '../todo/todo'
import { FC } from 'react'

export const TodoList: FC<{
  todos: TodoModel[]
  onCompleteTodo(id: Id): void
}> = ({ todos, onCompleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} onClick={() => onCompleteTodo(todo.id)} todo={todo} />
      ))}
    </ul>
  )
}
