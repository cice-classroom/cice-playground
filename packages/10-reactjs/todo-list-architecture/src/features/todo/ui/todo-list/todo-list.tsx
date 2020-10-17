import React from 'react'
import { Todo as TodoModel } from '../../domain/todo'
import { Id } from '../../domain/id'
import { Todo } from '../todo/todo'

export const TodoList: React.FunctionComponent<{
  todos: TodoModel[]
  onCompleteTodo(id: Id): void
}> = ({ todos, onCompleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} onClick={() => onCompleteTodo(todo.id)} todo={todo} />
      ))}
    </ul>
  )
}
