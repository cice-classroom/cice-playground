import React, { useReducer, useState } from 'react'

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'incrementBy'; by: number }

interface State {
  count: number
}

const initialState: State = {
  count: 0
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
    case 'incrementBy':
      return { count: state.count + action.by }
  }
}

export const UseReducerWithOptions: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [number, setNumber] = useState(0)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'incrementBy', by: number })}>By</button>
      <label>
        Increment by given number
        <input
          type="number"
          value={number}
          onChange={event => setNumber(Number(event.target.value))}
        />
      </label>
    </>
  )
}
