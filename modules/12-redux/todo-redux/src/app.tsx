import React from 'react'
import { Provider } from 'react-redux'
import { store } from './application/store/store'
import { TodoList } from './ui/todo-list'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}
