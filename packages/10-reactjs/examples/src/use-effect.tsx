import React, { useEffect, useState } from 'react'

export const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const [keyPressed, setKeyPressed] = useState('')

  useEffect(() => {
    document.title = (count + countTwo).toString()
  }, [count, countTwo])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeyPressed(e.code)
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div id="main">
      <button onClick={() => setCount(count + 1)}>Next</button>
      <button onClick={() => setCountTwo(countTwo + 1)}>Next</button>
      <span>{keyPressed}</span>
    </div>
  )
}
