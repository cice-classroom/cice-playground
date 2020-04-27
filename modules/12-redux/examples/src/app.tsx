import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResolve } from './async-action-thunk'
import { RootState } from './store'
import { addImmer, clearImmer, replaceSecondImmer } from './immer'

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const { result, isLoading } = useSelector((state: RootState) => state.counter)
  const { values } = useSelector((state: RootState) => state.immer)
  return (
    <main>
      <section>
        <h2>Async Action Thunk</h2>
        {isLoading && <span>Loading</span>}
        {result && <span>{result}</span>}
        <button onClick={() => dispatch(fetchResolve())}>Get value from API</button>
      </section>

      <section>
        <h2>Immer</h2>
        <ul>
          {values.map(value => (
            <li key={value}>{value}</li>
          ))}
        </ul>
        <button onClick={() => dispatch(addImmer(Math.random()))}>Add</button>
        <button onClick={() => dispatch(clearImmer())}>Clear</button>
        <button onClick={() => dispatch(replaceSecondImmer(Math.random()))}>Replace second</button>
      </section>
    </main>
  )
}
