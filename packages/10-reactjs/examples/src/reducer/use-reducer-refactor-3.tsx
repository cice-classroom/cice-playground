import React, { useReducer } from 'react'
import { stateReducer } from './state-reducer'

export const UseReducerRefactor3: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, { number: 0, error: null, status: 'idle' })

  const getNumber = async () => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * 100)
        if (number > 80) {
          reject(new Error('There was an error'))
        }
        resolve(number)
      }, 1000)
    })
  }

  const handleClick = async () => {
    try {
      dispatch({ type: 'started' })
      dispatch({ type: 'success', result: await getNumber() })
    } catch (e) {
      dispatch({ type: 'error', error: e })
    } finally {
      dispatch({ type: 'ended' })
    }
  }

  if (state.status === 'pending') {
    return <p>Loading</p>
  }

  return (
    <div>
      {state.error !== null && <p>{state.error.message}</p>}
      <button onClick={handleClick}>{state.number}</button>
    </div>
  )
}
