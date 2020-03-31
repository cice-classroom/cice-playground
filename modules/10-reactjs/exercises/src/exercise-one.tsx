import React from 'react'

export const ExerciseOneFor: React.FC = () => {
  const lis: JSX.Element[] = []

  for (let i = 1; i <= 50; i++) {
    lis.push(<li>{i}</li>)
  }

  return <ul>{lis}</ul>
}

export const ExerciseOne: React.FC = () => {
  const range = Array.from({ length: 50 }, (key, value) => value)

  return (
    <ul>
      {range.map(x => (
        <li>{x + 1}</li>
      ))}
    </ul>
  )
}
