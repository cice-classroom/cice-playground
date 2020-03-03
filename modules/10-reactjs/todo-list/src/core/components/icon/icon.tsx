import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './icon.module.css'
import { Size } from '../size'

const cx = bind(styles)

type IconName = 'check' | 'cross'

interface Props {
  name: IconName
  size?: Size
}

const icons: Record<IconName, string> = {
  check: '✅',
  cross: '❌'
}

export const Icon: React.FunctionComponent<Props> = ({ name, size = 'm' }) => {
  return <i className={cx('icon', `icon-size-${size}`)}>{icons[name]}</i>
}
