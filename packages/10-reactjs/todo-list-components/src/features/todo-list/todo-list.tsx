import React from 'react'
import { Todo as TodoModel } from '../todo'
import { Todo } from '../todo/todo'

export const TodoList: React.FC<{
  todos: TodoModel[]
  onCompleteTodo(id: number): void
}> = ({ todos, onCompleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} onClick={() => onCompleteTodo(todo.id)} todo={todo} />
      ))}
    </ul>
  )
}
