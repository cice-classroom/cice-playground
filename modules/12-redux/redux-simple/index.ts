import { createStore } from 'redux'
import { reducer } from './reducer'
import { decrement, increment } from './action-creators'

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
)

document.querySelector('#increment')?.addEventListener('click', () => {
  store.dispatch(increment())
})

document.querySelector('#decrement')?.addEventListener('click', () => {
  store.dispatch(decrement())
})

store.subscribe(() => {
  const counter = document.querySelector('#counter')
  if (counter !== null) {
    counter.innerHTML = store.getState().count.toString()
  }
})
