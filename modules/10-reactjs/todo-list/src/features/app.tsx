import React, { useState } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  function createTodo(todoText: string) {
    const newTodo: Todo = { id: Math.floor(Math.random() * 1000), text: todoText, completed: false }
    setTodos([...todos, newTodo])
  }

  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = todos.map((todo) => todo.text).includes(todoText)

  const clearTodo = () => setTodoText('')

  function completeTodo(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo
      })
    )
  }

  return (
    <main>
      <ul>
        {todos.map((todo) => (
          <li onClick={() => completeTodo(todo.id)} className={cx({ completed: todo.completed })}>
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          createTodo(todoText)
          clearTodo()
        }}
      >
        <label>
          Todo
          <input value={todoText} onChange={(event) => setTodoText(event.target.value)} />
        </label>
        <button onClick={clearTodo}>Clear todo</button>
        <button type="submit" disabled={isTodoDuplicated}>
          Create todo
        </button>
      </form>
    </main>
  )
}
