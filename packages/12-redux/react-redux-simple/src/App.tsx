import { FC } from 'react'
import './App.css'
import { Counter } from './Counter'
import { Provider } from 'react-redux'
import { store } from './store'

export const App: FC = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)
