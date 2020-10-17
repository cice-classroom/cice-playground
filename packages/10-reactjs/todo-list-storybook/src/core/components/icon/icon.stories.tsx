import React from 'react'
import { Icon } from './icon'

export default {
  title: 'Icon',
  component: Icon,
}

export const base = () => <Icon name={'check'}></Icon>
export const smallSize = () => <Icon name={'check'} size={'s'}></Icon>
export const mediumSize = () => <Icon name={'check'} size={'m'}></Icon>
export const bigSize = () => <Icon name={'check'} size={'l'}></Icon>
