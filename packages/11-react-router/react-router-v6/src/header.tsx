import React from 'react'
import { NavLink } from 'react-router-dom'
import { bind } from './bind'
import styles from './header.module.css'

const cx = bind(styles)

export const Header: React.FC = () => {
  return (
    <header>
      <NavLink to="/" activeClassName={cx('active')}>
        Home
      </NavLink>
      <NavLink to="/users" activeClassName={cx('active')}>
        Users
      </NavLink>
    </header>
  )
}
