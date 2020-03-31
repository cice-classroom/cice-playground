import React, { useState } from 'react'

export const ExerciseThree: React.FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const characters = event.target.value

    setValue(
      characters
        .split('')
        .filter(character => !['a', 'e', 'i', 'o', 'u'].includes(character.toLowerCase()))
        .join('')
    )
  }

  return (
    <div>
      {value}
      <label>
        Input
        <input onChange={handleChange} value={value} />
      </label>
    </div>
  )
}
