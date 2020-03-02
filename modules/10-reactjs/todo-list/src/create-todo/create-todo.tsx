import React, { useState } from 'react'
import { Button } from '../core/components/button/button'

export function CreateTodo({ onCreate }: { onCreate: (todoText: string) => void }) {
  const [todoText, setTodoText] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onCreate(todoText)
        setTodoText('')
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={event => setTodoText(event.target.value)} />
      </label>
      <Button className="my-button" onClick={() => setTodoText('')}>
        Clear todo
      </Button>
      <Button submit theme="primary">
        Create todo
      </Button>
    </form>
  )
}
