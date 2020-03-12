import React from 'react'
import { Todo as TodoModel } from '../todo'
import { Id } from '../id'
import { Todo } from '../todo/todo'

export const TodoList: React.FunctionComponent<{
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
