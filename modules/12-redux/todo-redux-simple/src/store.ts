import { incrementReducer } from './increment-reducer'
import { createStore } from 'redux';

export const store = createStore(incrementReducer);


export type RootState = ReturnType<typeof incrementReducer>
export type AppDispatch = typeof store.dispatch

