import React from 'react'
import { render, fireEvent, within } from '@testing-library/react'
import { App } from './app'

describe('app', () => {
  it('should create a todo', () => {
    const { getByLabelText, getByRole } = render(<App />)
    const list = getByRole('list')
    const input = getByLabelText('Todo')
    const form = getByRole('form')

    fireEvent.change(input, { target: { value: 'New todo' } })
    fireEvent.submit(form)

    const newTodo = within(list).getByText('New todo')
    expect(newTodo).toBeInTheDocument()
  })

  it('should complete a todo', () => {
    const { getByLabelText, getByRole } = render(<App />)
    const list = getByRole('list')
    const input = getByLabelText('Todo')
    const form = getByRole('form')
    fireEvent.change(input, { target: { value: 'New todo' } })
    fireEvent.submit(form)

    const newTodo = within(list).getByText('New todo')
    fireEvent.click(newTodo)

    expect(newTodo).toHaveClass('completed')
  })

  it('should clear the input when creating a todo', () => {
    const { getByLabelText, getByRole, debug } = render(<App />)
    const input = getByLabelText('Todo')
    const form = getByRole('form')

    fireEvent.change(input, { target: { value: 'New todo' } })
    fireEvent.submit(form)

    expect(input).toHaveValue('')
  })
})
