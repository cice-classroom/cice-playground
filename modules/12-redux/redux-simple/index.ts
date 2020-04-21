import { createStore } from 'redux'
import { reducer } from './reducer'
import { decrement, increment, incrementBy } from './action-creators'

const devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
const store = createStore(reducer, devtools && devtools({ trace: true, traceLimit: 25 }))

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
