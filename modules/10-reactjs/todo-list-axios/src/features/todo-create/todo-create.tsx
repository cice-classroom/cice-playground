import React, { useState } from 'react'
import { Button } from '../../core/components/button/button'
import { Todo } from '../todo'

interface Props {
  onCreate(todoText: string): void
  todos: Todo[]
}

export const TodoCreate: React.FunctionComponent<Props> = ({ onCreate, todos }) => {
  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = todos.map((todo) => todo.text).includes(todoText)

  const clearTodo = () => setTodoText('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onCreate(todoText)
        clearTodo()
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={(event) => setTodoText(event.target.value)} />
      </label>
      <Button onClick={clearTodo}>Clear todo</Button>
      <Button theme={'primary'} submit isDisabled={isTodoDuplicated}>
        Create todo
      </Button>
    </form>
  )
}
