import { FC } from 'react'

interface Props {
  onClick(): void
}

export const Button: FC<Props> = ({ onClick, children }) => (
  <button onClick={() => onClick()}>{children}</button>
)
