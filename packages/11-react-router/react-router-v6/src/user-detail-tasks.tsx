import { FC } from 'react'

export const UserDetailTasks: FC = () => {
  return (
    <ul>
      {['cuarentena', 'dar un paseo por la cocina', 'salir a comprar'].map(task => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  )
}
