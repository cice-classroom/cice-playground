import { FC } from 'react'

export const Exercise1For: FC = () => {
  const lis: JSX.Element[] = []

  for (let i = 1; i <= 50; i++) {
    lis.push(<li key={i}>{i}</li>)
  }

  return <ul>{lis}</ul>
}

export const Exercise1: FC = () => {
  const range = Array.from({ length: 50 }, (key, value) => value)

  return (
    <ul>
      {range.map(x => (
        <li key={x}>{x + 1}</li>
      ))}
    </ul>
  )
}
