import { Action, applyMiddleware, createStore } from 'redux'
import { rootReducer } from './root-reducer'
import thunk, { ThunkAction } from 'redux-thunk'

const enhancers = applyMiddleware(thunk)
export const store = createStore(rootReducer, enhancers)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type Thunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
