import React, { useEffect, useRef, useState } from 'react'

const useInterval = (callback: () => void, interval = 1_000) => {
  const savedCallback = useRef<() => void>()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      if (savedCallback.current !== undefined) {
        savedCallback.current()
      }
    }

    let id = setInterval(tick, interval)
    return () => clearInterval(id)
  }, [])
}

const useTimer = () => {
  const [seconds, setSeconds] = useState(0)

  const start = (from: number) => {
    setSeconds(from)
  }

  useInterval(() => {
    setSeconds(seconds - 1)
  })

  return { seconds, start }
}

export const ExerciseEleven: React.FC = () => {
  const [fromSeconds, setFromSeconds] = useState(60)
  const { seconds, start } = useTimer()

  useEffect(() => {
    start(fromSeconds)
  }, [fromSeconds])

  return (
    <div>
      {fromSeconds}
      <input
        type="number"
        value={fromSeconds}
        onChange={e => setFromSeconds(Number(e.target.value))}
      />
      <p>{seconds}</p>
    </div>
  )
}
