import { createStore } from 'redux'
import { rootReducer } from './root-reducer'

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
