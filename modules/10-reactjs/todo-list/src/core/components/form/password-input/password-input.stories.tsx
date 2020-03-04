import React, { useState } from 'react'
import { PasswordInput } from './password-input'

export default {
  title: 'PasswordInput',
  component: PasswordInput
}

const WithState: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <PasswordInput value={value} label="My input" onChange={setValue}></PasswordInput>
      {value}
    </>
  )
}

export const base = WithState
