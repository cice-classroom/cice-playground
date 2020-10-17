import React, { useEffect, useState } from 'react'

export const ExerciseFour: React.FC = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter !== 0) {
      document.title = new Date().toISOString()
    }
  }, [counter])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
    </div>
  )
}
