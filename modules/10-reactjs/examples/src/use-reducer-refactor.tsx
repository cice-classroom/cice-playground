import React, { useReducer } from 'react'

interface State {
  status: 'pending' | 'error' | 'success' | 'idle'
  error: Error | null
  result: number
}

export type Action =
  | { type: 'fetch'; result: number }
  | { type: 'error'; error: Error }
  | { type: 'started' }
  | { type: 'ended' }

const stateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'error':
      return {
        status: 'error',
        result: 0,
        error: action.error
      }
    case 'fetch':
      return {
        status: 'success',
        error: null,
        result: action.result
      }
    case 'started':
      return {
        ...state,
        status: 'pending'
      }
    case 'ended':
      return {
        ...state,
        status: 'idle'
      }
  }
}

export const UseReducerRefactor: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, { result: 0, error: null, status: 'idle' })

  const getNumber = async () => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * 100)
        if (number > 50) {
          reject(new Error('There was an error'))
        }
        resolve(number)
      }, 1000)
    })
  }

  const handleClick = async () => {
    try {
      dispatch({ type: 'started' })
      dispatch({ type: 'fetch', result: await getNumber() })
    } catch (e) {
      dispatch({ type: 'error', error: new Error('an error occurred') })
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
      <button onClick={handleClick}>{state.result}</button>
    </div>
  )
}
