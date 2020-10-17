import React, { useReducer } from 'react'

type Action =
  | { type: 'started' }
  | { type: 'finished' }
  | { type: 'success'; result: number }
  | { type: 'error'; error: Error }

interface State {
  isLoading: boolean
  error: Error | null
  number: number
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'started':
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case 'success':
      return {
        ...state,
        number: state.number + action.result
      }
    case 'error':
      return {
        ...state,
        number: 0,
        error: action.error
      }
    case 'finished':
      return {
        ...state,
        isLoading: false
      }
  }
}

export const UseReducerRefactor1: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { number: 0, error: null, isLoading: false })

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
      dispatch({ type: 'finished' })
    }
  }

  if (state.isLoading) {
    return <p>Loading</p>
  }

  return (
    <div>
      {state.error !== null && <p>{state.error.message}</p>}
      <button onClick={handleClick}>{state.number}</button>
    </div>
  )
}
