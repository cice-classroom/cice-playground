import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './card.module.css'

const cx = bind(styles)

export const Card: React.FunctionComponent<{}> = ({ children }) => {
  return <div className={cx('card')}>{children}</div>
}
