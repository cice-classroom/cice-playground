import { createStore } from 'redux'
import { decrement, increment } from './action-creators'
import { incrementBy } from './increment-by-creators'
import { rootReducer } from './root-reducer'

const devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
const store = createStore(rootReducer, devtools && devtools({ trace: true, traceLimit: 25 }))

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
  const incrementByCounter = document.querySelector('#increment-by-counter')
  const incrementCounter = document.querySelector('#increment-counter')
  if (incrementCounter !== null && incrementByCounter !== null) {
    incrementByCounter.innerHTML = store.getState().incrementByReducer.count.toString()
    incrementCounter.innerHTML = store.getState().incrementReducer.count.toString()
  }
})
