import React, { createContext, useContext, useState } from 'react'

export const CounterContext = createContext<{
  counter: number
  setCounter: (newCounter: number) => void
  incrementCounter: () => void
}>({ counter: 0, setCounter: () => {}, incrementCounter: () => {} })

const ComponentA: React.FC = () => {
  const { counter, setCounter, incrementCounter } = useContext(CounterContext)
  return (
    <>
      <button onClick={() => setCounter(counter + 10)}>{counter}</button>
      <button onClick={() => incrementCounter()}>{counter}</button>
    </>
  )
}

const ComponentB: React.FC = () => {
  return (
    <CounterContext.Consumer>
      {({ counter, setCounter }) => (
        <button onClick={() => setCounter(counter + 10)}>{counter}</button>
      )}
    </CounterContext.Consumer>
  )
}

export const Context: React.FC = () => {
  const [state, setState] = useState(0)
  return (
    <CounterContext.Provider
      value={{
        counter: state,
        setCounter: counter => setState(counter),
        incrementCounter: () => setState(state + 1)
      }}
    >
      <ComponentA />
      <ComponentB />
    </CounterContext.Provider>
  )
}
