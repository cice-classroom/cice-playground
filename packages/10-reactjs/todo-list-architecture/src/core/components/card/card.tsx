import { bind } from '../../../utils/bind'
import styles from './card.module.css'
import { FC } from 'react'

const cx = bind(styles)

export const Card: FC = ({ children }) => {
  return <div className={cx('card')}>{children}</div>
}
