import React, { useState } from 'react'

export const ExerciseThree: React.FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (characters: string) => {
    if (['a', 'e', 'i', 'o', 'u'].every(vowel => !characters.toLowerCase().includes(vowel))) {
      setValue(characters)
    }
  }

  return (
    <div>
      <input
        aria-label="Input"
        type="text"
        onChange={event => handleChange(event.target.value)}
        value={value}
      />
    </div>
  )
}
