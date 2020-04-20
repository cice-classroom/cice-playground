import React, { useReducer, useState } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

type Action =
  | { type: 'CREATE_TODO'; payload: { id: number; text: string } }
  | { type: 'COMPLETE_TODO'; payload: { id: number } }

const reducer = (todos: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'CREATE_TODO':
      const todo: Todo = {
        completed: false,
        id: action.payload.id,
        text: action.payload.text
      }
      return [...todos, todo]
    case 'COMPLETE_TODO':
      const updatedTodos = todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
      return updatedTodos
  }

  return todos
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [state, dispatch] = useReducer(reducer, [])

  function createTodo(todoText: string) {
    const newTodo: Todo = { id: Math.floor(Math.random() * 1000), text: todoText, completed: false }
    dispatch({
      type: 'CREATE_TODO',
      payload: { id: Math.floor(Math.random() * 1000), text: todoText }
    })
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
    dispatch({ type: 'COMPLETE_TODO', payload: { id } })
  }

  return (
    <main>
      <ul>
        {todos.map(todo => (
          <li onClick={() => completeTodo(todo.id)} className={cx({ completed: todo.completed })}>
            {todo.text}
          </li>
        ))}
      </ul>
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
