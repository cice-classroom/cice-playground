import { createStore } from 'redux'
import { rootReducer } from './root-reducer'

export const store = createStore(rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
