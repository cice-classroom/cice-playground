import { bind } from '../../utils/bind'
import styles from './todo.module.css'

import { Todo as TodoModel } from '../todo'
import { FC } from 'react'

const cx = bind(styles)

interface Props {
  onClick(): void
  todo: TodoModel
}

export const Todo: FC<Props> = ({ onClick, todo }) => (
  <div onClick={onClick}>
    <span></span>
    <li className={cx({ completed: todo.completed })}>{todo.text}</li>
  </div>
)
