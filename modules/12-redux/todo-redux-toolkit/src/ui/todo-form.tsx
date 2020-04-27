import React, { useState } from 'react'
import { useAppDispatch } from '../application/store/store'
import { createTodo } from '../application/todo/todo-action'

export const TodoForm: React.FC = () => {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()
  return (
    <>
      <label>
        Todo
        <input type="text" value={text} onChange={event => setText(event.target.value)} />
      </label>
      <button
        onClick={() => dispatch(createTodo({ text, id: Math.floor(Math.random() * 10_000) }))}
      >
        Create
      </button>
    </>
  )
}
