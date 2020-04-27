import { createStore, applyMiddleware, Action } from 'redux'
import { rootReducer } from './root-reducer'
import thunk, { ThunkAction } from 'redux-thunk'

const devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
const middlewares = applyMiddleware(thunk, devtools && devtools({ trace: true, traceLimit: 25 }))

export const store = createStore(rootReducer, middlewares)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type Thunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
