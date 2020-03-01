import React from 'react'
import { render, fireEvent, within } from '@testing-library/react'
import { App } from './app'

describe('app', () => {
  it('should create a todo', () => {
    const { getByLabelText, getByRole } = render(<App />)
    const list = getByRole('list')
    const label = getByLabelText('Todo')
    const form = getByRole('form')

    fireEvent.change(label, { target: { value: 'New todo' } })
    fireEvent.submit(form)

    const newTodo = within(list).getByText('New todo')
    expect(newTodo).toBeInTheDocument()
  })
})
