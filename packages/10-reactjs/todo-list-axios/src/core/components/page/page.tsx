import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './page.module.css'

const cx = bind(styles)

export const Page: React.FunctionComponent<{}> = ({ children }) => {
  return <main className={cx('page')}>{children}</main>
}
