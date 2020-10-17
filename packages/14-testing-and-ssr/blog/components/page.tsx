import React from 'react'
import styles from './page.module.css'

export const Page: React.FC = ({ children }) => {
  return <main className={styles.container}>{children}</main>
}
