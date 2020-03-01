import React from 'react'
import { Todo } from '../todo'
import { bind } from '../utils/bind'
import styles from './todo-list.module.css'

const cx = bind(styles)

export function TodoList({
  completeTodo,
  todos
}: {
  todos: Todo[]
  completeTodo: (id: number) => void
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className={cx({ completed: todo.completed })}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  )
}
