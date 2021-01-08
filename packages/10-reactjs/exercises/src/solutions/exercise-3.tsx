import { FC, useState } from 'react'

export const Exercise3: FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (characters: string) => {
    const charactersWithoutVowels = characters
      .split('')
      .filter(character => !['a', 'e', 'i', 'o', 'u'].includes(character))
      .join('')
    setValue(charactersWithoutVowels)
  }

  return (
    <input
      aria-label="Input"
      placeholder="Enter characters"
      type="text"
      onChange={event => handleChange(event.target.value)}
      value={value}
    />
  )
}
