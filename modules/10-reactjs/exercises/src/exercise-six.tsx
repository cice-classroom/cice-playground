import React, { useEffect, useState } from 'react'

export const ExerciseSix: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem('input') ?? '')

  useEffect(() => {
    localStorage.setItem('input', value)
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
      <input onChange={handleChange} value={value} />
    </>
  )
}

export const useLocalStorage = (initialState: string) => {
  const [value, setValue] = useState(initialState)

  useEffect(() => {
    const item = localStorage.getItem('input')
    if (item !== null) {
      setValue(item)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('input', value)
  }, [value])

  return { value, setValue }
}

export const ExerciseSixCustomHook: React.FC = () => {
  const { value, setValue } = useLocalStorage('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
      <input onChange={handleChange} value={value} />
    </>
  )
}
