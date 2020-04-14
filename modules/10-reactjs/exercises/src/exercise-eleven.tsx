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
  let initialSeconds = 60
  const [isPaused, setIsPaused] = useState(false)

  const start = (from: number) => {
    setIsPaused(false)
    setSeconds(from)
    initialSeconds = from
  }

  const reset = () => {
    setSeconds(initialSeconds)
  }

  const pauseOrResume = () => {
    setIsPaused(!isPaused)
  }

  useInterval(() => {
    if (!isPaused) {
      setSeconds(seconds - 1)
    }
  })

  return { seconds, start, reset, pauseOrResume, isPaused }
}

export const ExerciseEleven: React.FC = () => {
  const [fromSeconds, setFromSeconds] = useState(60)
  const { seconds, start, reset, pauseOrResume, isPaused } = useTimer()

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
      <button onClick={pauseOrResume}>{isPaused ? 'Resume' : 'Pause'}</button>
      <button onClick={reset}>Reset</button>
      <p>{seconds}</p>
    </div>
  )
}
