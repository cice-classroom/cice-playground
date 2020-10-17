import React, { useState } from 'react'
import { saveTodo } from '../application/todo/todo-action'
import { useDispatch } from 'react-redux'

export const TodoForm: React.FC = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  return (
    <>
      <label>
        Todo
        <input type="text" value={text} onChange={event => setText(event.target.value)} />
      </label>
      <button onClick={() => dispatch(saveTodo({ text, id: Math.floor(Math.random() * 10_000) }))}>
        Create
      </button>
    </>
  )
}
