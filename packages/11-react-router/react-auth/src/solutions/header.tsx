import { Link } from 'react-router-dom'
import { routes } from './routes'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <nav>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.login}>Login</Link>
      <Link to={routes.protected}>Protected</Link>
    </nav>
  )
}
