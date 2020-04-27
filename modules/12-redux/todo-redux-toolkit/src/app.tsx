import React from 'react'
import { Provider } from 'react-redux'
import { store } from './application/store/store'
import { TodoList } from './ui/todo-list'
import { TodoForm } from './ui/todo-form'
import { TodoFilters } from './ui/todo-filters'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <TodoForm />
      <TodoFilters />
    </Provider>
  )
}
