import styles from './page.module.css'
import { FC } from 'react'

export const Page: FC = ({ children }) => {
  return <main className={styles.container}>{children}</main>
}
