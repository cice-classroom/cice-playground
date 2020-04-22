import React, { useState } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'
import { TodoContext } from './todo-context'
import { TodoCount } from './todo-count'
import { TodoClear } from './todo-clear'

const cx = bind(styles)

export function App() {
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
    <TodoContext.Provider value={{ todos, clearTodos: () => setTodos([]) }}>
      <main>
        <ul>
          {todos.map((todo) => (
            <li onClick={() => completeTodo(todo.id)} className={cx({ completed: todo.completed })}>
              {todo.text}
            </li>
          ))}
        </ul>
        <TodoCount />
        <TodoClear />
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
          <button type="button" onClick={clearTodo}>
            Clear todo
          </button>
          <button type="submit" disabled={isTodoDuplicated}>
            Create todo
          </button>
        </form>
      </main>
    </TodoContext.Provider>
  )
}
