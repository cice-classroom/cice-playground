import React, { useState } from 'react'

export const ExerciseTwo: React.FC = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}></button>
    </div>
  )
}
