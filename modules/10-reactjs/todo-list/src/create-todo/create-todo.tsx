import React from 'react'

export function CreateTodo({
  onChange,
  onClick,
  onSubmit,
  value
}: {
  onSubmit: (event: React.FormEvent) => void
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Todo
        <input value={value} onChange={onChange} />
      </label>
      <button onClick={onClick}>Clear todo</button>
      <button type="submit">Create todo</button>
    </form>
  )
}
