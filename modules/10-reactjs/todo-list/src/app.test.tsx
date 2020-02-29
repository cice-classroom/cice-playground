import React from 'react'
import { render } from '@testing-library/react'
import { App } from './app'

describe('app', () => {
  it('should create a todo', () => {
    const { getByText, getByLabelText, debug} = render(<App />)
    const label = getByLabelText('Todo')
    debug(label)

    const createTodo = getByText('Create todo')

    expect(createTodo).toBeInTheDocument()
  })
})
