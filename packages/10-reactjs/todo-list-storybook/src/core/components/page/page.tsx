import { bind } from '../../../utils/bind'
import styles from './page.module.css'
import { FC } from 'react'

const cx = bind(styles)

export const Page: FC = ({ children }) => {
  return <main className={cx('page')}>{children}</main>
}
