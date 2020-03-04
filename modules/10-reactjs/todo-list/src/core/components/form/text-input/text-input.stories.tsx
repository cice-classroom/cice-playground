import React, { useState } from 'react'
import { TextInput } from './text-input'

export default {
  title: 'TextInput',
  component: TextInput
}

const WithState: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <TextInput value={value} label="My input" onChange={setValue}></TextInput>
      {value}
    </>
  )
}

export const base = WithState
