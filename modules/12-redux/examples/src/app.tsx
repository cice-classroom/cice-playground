import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResolve } from './async-action-thunk'
import { RootState } from './store'

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const {result, isLoading} = useSelector((state: RootState) => state.counter)
  return <main>
    {isLoading && <span>Loading</span>}
    {result && <span>{result}</span>}
    <button onClick={() => dispatch(fetchResolve())}>Get value from API</button>
  </main>
}

