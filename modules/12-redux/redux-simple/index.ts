import { createStore } from 'redux'
import { reducer } from './reducer'
import { decrement, increment, incrementBy } from './action-creators'

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

document.querySelector('#increment-by')?.addEventListener('click', () => {
  const element = document.querySelector('#by') as HTMLInputElement
  store.dispatch(incrementBy(Number(element.value)))
})

store.subscribe(() => {
  const counter = document.querySelector('#counter')
  if (counter !== null) {
    counter.innerHTML = store.getState().count.toString()
  }
})
