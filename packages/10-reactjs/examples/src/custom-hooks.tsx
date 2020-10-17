import React, { useState } from 'react'

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue)

  const incrementCounter = () => setCounter(counter + 1)

  return {
    counter,
    incrementCounter
  }
}

export function CustomHooks() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export function Header() {
  const { counter, incrementCounter } = useCounter(10)
  return <button onClick={() => incrementCounter()}>Click me {counter}</button>
}

export function Footer() {
  const { counter, incrementCounter } = useCounter()
  return <button onClick={() => incrementCounter()}>Click me {counter}</button>
}
