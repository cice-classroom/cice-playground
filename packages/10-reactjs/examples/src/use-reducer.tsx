import React, { useReducer } from 'react'

type ActionType = 'increment' | 'decrement' | 'reset'

interface State {
  count: number
}

const initialState: State = {
  count: 0
}

const reducer = (state: State, action: ActionType): State => {
  switch (action) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
  }
}

export const UseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch('reset')}>Reset</button>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
    </>
  )
}
