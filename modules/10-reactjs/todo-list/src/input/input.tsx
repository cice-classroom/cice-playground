import React, { useState } from 'react'

interface Props {
  onInputChange: (value: string) => void
}

export function Input({ onInputChange }: Props) {
  const [value, setValue] = useState('')

  return (
    <>
      <input
        value={value}
        onChange={event => {
          setValue(event.target.value)
          onInputChange(event.target.value)
        }}
      />
      <span>{value}</span>
    </>
  )
}
