import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './routes'

export const Header: React.FC = () => {
  return (
    <nav>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.login}>Login</Link>
      <Link to={routes.protected}>Protected</Link>
    </nav>
  )
}
