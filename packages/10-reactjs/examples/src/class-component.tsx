import { Component, useEffect, useState } from 'react'

export class ClassComponent extends Component<{}, { counter: number }> {
  constructor(props: any) {
    super(props)

    this.state = {
      counter: 0
    }

    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount() {
    this.setState({ counter: this.state.counter + 1 })
  }

  componentDidMount() {
    document.title = 'hola'
  }

  componentWillUnmount() {
    document.title = 'bye'
  }

  render() {
    return (
      <>
        <h1>Hello world</h1>
        <ClassComponentHook />
        <button onClick={this.incrementCount}>{this.state.counter}</button>
      </>
    )
  }
}

export const ClassComponentHook = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = 'hello'
    return () => {
      document.title = 'bye'
    }
  }, [])

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </>
  )
}
