import { bind } from '../../utils/bind'
import styles from './todo.module.css'
import React from 'react'
import { Todo as TodoModel } from '../todo'

const cx = bind(styles)

interface Props {
  onClick(): void
  todo: TodoModel
}

export const Todo: React.FunctionComponent<Props> = ({ onClick, todo }) => (
  <div onClick={onClick}>
    <span></span>
    <li className={cx({ completed: todo.completed })}>{todo.text}</li>
  </div>
)
