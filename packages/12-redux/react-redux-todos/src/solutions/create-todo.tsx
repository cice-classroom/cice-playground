import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store'
import { addTodo } from './todos/todo-action-creators'

export const CreateTodo: FC = () => {
  const [value, setValue] = useState('')
  const dispatch: AppDispatch = useDispatch()

  function onCreateTodo() {
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={onCreateTodo}>Create todo</button>
    </>
  )
}
