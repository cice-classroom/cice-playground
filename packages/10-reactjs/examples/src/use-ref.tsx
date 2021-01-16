import { FC, useEffect, useRef } from 'react'

export const UseRef: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const shouldFocus = Math.random() > 0.5
    if (shouldFocus) {
      inputRef.current?.focus()
    }
  }, [])

  return (
    <>
      <h1>Use ref</h1>
      <input ref={inputRef} />
    </>
  )
}
