import React, { createContext, useContext, useState } from 'react'

export const CounterContext = createContext<{
  counter: number
  setCounter: (newCounter: number) => void
}>({ counter: 0, setCounter: () => {} })

const ComponentA: React.FC = () => {
  const { counter, setCounter } = useContext(CounterContext)
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

const ComponentB: React.FC = () => {
  return (
    <CounterContext.Consumer>
      {({ counter, setCounter }) => (
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      )}
    </CounterContext.Consumer>
  )
}

export const Context: React.FC = () => {
  const [state, setState] = useState(0)
  return (
    <CounterContext.Provider value={{ counter: state, setCounter: counter => setState(counter) }}>
      <ComponentA />
      <ComponentB />
    </CounterContext.Provider>
  )
}
