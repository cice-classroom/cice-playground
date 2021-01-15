import { FC, useState } from 'react'
import styles from './app.module.css'
import { bind } from '../utils/bind'
import { Button } from './button'

const cx = bind(styles)

interface Todo {
  id: number
  text: string
  completed: boolean
}

export const App: FC = () => {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: 'hola',
      completed: true
    },
    {
      id: 2,
      text: 'adios',
      completed: false
    }
  ])

  function createTodo() {
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 10_000), text: todoText, completed: false }
    ])
    setTodoText('')
  }

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
      <header>
        <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
        <Button
          onClick={() => {
            createTodo()
          }}
        >
          <strong>Create todo</strong>
        </Button>
      </header>
      <ul>
        {todos.map(todo => (
          <li
            onClick={() => completeTodo(todo.id)}
            key={todo.id}
            className={cx({ completed: todo.completed })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </main>
  )
}
