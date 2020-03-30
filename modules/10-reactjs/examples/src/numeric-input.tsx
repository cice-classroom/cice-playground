import React, { useState } from 'react'

interface Props {
  label: string
  value: number
  onChange(newValue: number): void
}

export const NumericInput: React.FC = () => {
  const [number, setNumber] = useState(0)

  return <MyNumericInput onChange={setNumber} value={number} label="Enter a number" />
}

export const MyNumericInput: React.FC<Props> = ({ value, onChange, label }) => {
  return (
    <label>
      {label}
      <input type="number" value={value} onChange={event => onChange(Number(event.target.value))} />
    </label>
  )
}
