import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo } from '../application/todo/todo-action'
import { visibleTodosSelector } from '../application/visible-todos-selector'

export const TodoList: FC = () => {
  const todos = useSelector(visibleTodosSelector)
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  return (
    <ul>
      {todos.map(({ id, text }) => (
        <div>
          <li key={id}>{text}</li>
          <button onClick={() => setIsEditing(!isEditing)}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
          <button onClick={() => dispatch(removeTodo({ id }))}>
            <span role="img" aria-label="exit">
              ❌️
            </span>
          </button>
          {isEditing && (
            <>
              <input type="text" onChange={event => setValue(event.target.value)} value={value} />
              <button onClick={() => dispatch(editTodo({ id, text: value }))}>
                <span role="img" aria-label="accept">
                  ✅
                </span>
              </button>
            </>
          )}
        </div>
      ))}
    </ul>
  )
}
