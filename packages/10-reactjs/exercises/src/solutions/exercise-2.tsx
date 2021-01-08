import { FC, useState } from 'react'

export const Exercise2: FC = () => {
  const [counter, setCounter] = useState(0)

  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}
