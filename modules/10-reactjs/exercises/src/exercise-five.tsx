import React, { useState } from 'react'

export const ExerciseFive: React.FC = () => {
  const initialCount = 10
  const [counter, setCounter] = useState(initialCount)

  const hasCounterFinished = counter === 0

  return (
    <div>
      <button disabled={hasCounterFinished} onClick={() => setCounter(counter - 1)}>
        {counter}
      </button>
      {hasCounterFinished && (
        <>
          <h1>¡Boom!</h1>
          <button onClick={() => setCounter(initialCount)}>Reset</button>
        </>
      )}
    </div>
  )
}
