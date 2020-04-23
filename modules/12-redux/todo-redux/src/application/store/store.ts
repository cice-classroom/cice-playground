import { createStore } from 'redux'
import { rootReducer } from './root-reducer'

const devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
export const store = createStore(rootReducer, devtools && devtools({ trace: true, traceLimit: 25 }))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
