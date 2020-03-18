import React, { useState } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  async function createTodo(todoText: string) {
    const newTodo: Todo = { id: Math.random() * 1000, text: todoText, completed: false }
    setTodos([...todos, newTodo])
  }

  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = todos.map(todo => todo.text).includes(todoText)

  const clearTodo = () => setTodoText('')

  function completeTodo(id: number) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
    )
  }

  return (
    <main>
      <ul>
        {todos.map(todo => (
          <div onClick={() => completeTodo(todo.id)}>
            <span></span>
            <li className={cx({ completed: todo.completed })}>{todo.text}</li>
          </div>
        ))}
      </ul>{' '}
      onCompleteTodo={completeTodo}>
      <form
        onSubmit={event => {
          event.preventDefault()
          createTodo(todoText)
          clearTodo()
        }}
      >
        <label>
          Todo
          <input value={todoText} onChange={event => setTodoText(event.target.value)} />
        </label>
        <button onClick={clearTodo}>Clear todo</button>
        <button type="submit" disabled={isTodoDuplicated}>
          Create todo
        </button>
      </form>
    </main>
  )
}
