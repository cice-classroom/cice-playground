import React, { useEffect, useState } from 'react'

const useKeyHistory = () => {
  const [keys, setKeys] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys([...keys, e.key])
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  return keys
}

export const ExerciseTen: React.FC = () => {
  const keys = useKeyHistory()
  return (
    <ul>
      {keys.map((key, index) => (
        <li key={index}>{key}</li>
      ))}
    </ul>
  )
}
