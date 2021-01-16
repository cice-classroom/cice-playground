import { Component, ErrorInfo, FC, useState } from 'react'

export class ErrorBoundary extends Component<{}, { hasError: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    alert(error + ' ' + JSON.stringify(errorInfo, null, 2))
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

const BuggyCounter: FC = () => {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter + 1)
  }

  if (counter === 5) {
    throw new Error('I crashed!')
  }

  return <h1 onClick={handleClick}>{counter}</h1>
}

export const AppErrorBoundary: FC = () => {
  return (
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  )
}
