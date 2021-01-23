import { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { TodoList } from './todo-list'
import { CreateTodo } from './create-todo'

export const App: FC = () => (
  <Provider store={store}>
    <TodoList />
    <CreateTodo />
  </Provider>
)
