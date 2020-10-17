import { Action } from 'redux'
import { rootReducer } from './root-reducer'
import { ThunkAction } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type Thunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
