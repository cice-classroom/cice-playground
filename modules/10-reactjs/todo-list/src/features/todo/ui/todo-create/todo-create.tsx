import React, { useState } from 'react'

interface Props {
  onCreate(todoText: string): void
}

export const TodoCreate: React.FunctionComponent<Props> = ({ onCreate }) => {
  const [todoText, setTodoText] = useState('')

  const clearTodo = () => setTodoText('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onCreate(todoText)
        clearTodo()
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={event => setTodoText(event.target.value)} />
      </label>
      <button onClick={clearTodo}>Clear todo</button>
      <button type="submit">Create todo</button>
    </form>
  )
}
