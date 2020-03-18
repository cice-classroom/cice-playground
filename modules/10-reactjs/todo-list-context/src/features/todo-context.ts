import { createContext } from 'react'
import { Todo } from './todo'

export const TodoContext = createContext<{ todos: Todo[]; clearTodos: () => void }>({
  todos: [],
  clearTodos: () => {}
})
