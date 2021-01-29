import { createContext, FC, useContext, useState } from 'react'

export const CounterContext = createContext<{
  counter: number
  setCounter: (newCounter: number) => void
  incrementCounter: () => void
}>({ counter: 0, setCounter: () => {}, incrementCounter: () => {} })

const ComponentA: FC = () => {
  const { counter, setCounter, incrementCounter } = useContext(CounterContext)
  return (
    <>
      <button onClick={() => setCounter(counter + 10)}>{counter}</button>
      <button onClick={() => incrementCounter()}>{counter}</button>
    </>
  )
}

const ComponentB: FC = () => {
  return (
    <CounterContext.Consumer>
      {({ counter, setCounter }) => (
        <button onClick={() => setCounter(counter + 10)}>{counter}</button>
      )}
    </CounterContext.Consumer>
  )
}

export const Context: FC = () => {
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
