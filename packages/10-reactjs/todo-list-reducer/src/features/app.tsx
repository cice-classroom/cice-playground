import React, { useReducer, useState } from 'react'
import styles from './app.module.css'
import { bind } from '../utils/bind'
import { reducer } from './reducer'

const cx = bind(styles)

export function useTodos() {
  const [todos, dispatch] = useReducer(reducer, [])
  return { todos, dispatch }
}

export const App: React.FC = () => {
  const { todos, dispatch } = useTodos()
  const [todoText, setTodoText] = useState('')

  const isTodoDuplicated = todos.map((todo) => todo.text).includes(todoText)
  const clearTodo = () => setTodoText('')

  return (
    <main>
      <ul>
        {todos.map((todo) => (
          <li
            onClick={() => dispatch({ type: 'COMPLETE_TODO', payload: { id: todo.id } })}
            className={cx({ completed: todo.completed })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          dispatch({
            type: 'CREATE_TODO',
            payload: { id: Math.floor(Math.random() * 1000), text: todoText },
          })
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
