import React, { useReducer } from 'react'

type Action =
  | { type: 'started' }
  | { type: 'ended' }
  | { type: 'success'; result: number }
  | { type: 'error'; error: Error }

interface State {
  status: 'pending' | 'error' | 'success' | 'idle'
  error: Error | null
  number: number
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'started':
      return {
        ...state,
        status: 'pending',
        error: null
      }
    case 'success':
      return {
        ...state,
        status: 'success',
        number: state.number + action.result
      }
    case 'error':
      return {
        ...state,
        status: 'error',
        number: 0,
        error: action.error
      }
    case 'ended':
      return {
        ...state,
        status: 'idle'
      }
  }
}

export const UseReducerRefactor2: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { number: 0, error: null, status: 'idle' })

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
