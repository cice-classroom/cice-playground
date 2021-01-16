import { FC, useEffect, useRef, useState } from 'react'

export const BuggyTimer: FC = () => {
  const [value, setValue] = useState(10)

  useEffect(() => {
    const id = setInterval(() => {
      setValue(value - 1)
    }, 1_000)
    console.log('lol')
    return () => clearInterval(id)
  }, [])

  if (value === 0) {
    return <h2>Boom</h2>
  }

  return <p>{value}</p>
}

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(() => {})

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()

    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}

export const Timer: FC = () => {
  const [value, setValue] = useState(10)

  useInterval(() => setValue(value - 1), 1_000)

  return (
    <>
      <h2>Buggy timer</h2>
      <BuggyTimer />
      <h2>Good timer</h2>
      <p>{value}</p>
    </>
  )
}
