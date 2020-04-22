import React from 'react'
import { Button } from './button'

export default {
  title: 'Button',
  component: Button,
}

export const primary = () => <Button theme="primary">Click me</Button>
export const secondary = () => <Button theme="secondary">Click me</Button>
