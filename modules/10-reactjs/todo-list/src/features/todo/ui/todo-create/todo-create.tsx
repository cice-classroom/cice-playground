import React, { useState } from 'react'
import { Button } from '../../../../core/components/button/button'

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
      <Button onClick={clearTodo}>Clear todo</Button>
      <Button submit>Create todo</Button>
    </form>
  )
}
