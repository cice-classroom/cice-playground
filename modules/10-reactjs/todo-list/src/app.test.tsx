import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { App } from './app'

describe('app', () => {
  it('should create a todo', () => {
    const { getByText, createTodo } = setup()

    createTodo('New todo')

    const newTodo = getByText('New todo')
    expect(newTodo).toBeInTheDocument()
  })

  it('should clear the todo input when creating todo', () => {
    const { createTodo, getInput } = setup()

    createTodo('New todo')

    expect(getInput()).toHaveValue('')
  })

  it('should complete a todo', () => {
    const { createTodo, getInput, getByText } = setup()
    createTodo('Old todo')
    createTodo('New todo')

    const newTodo = getByText('New todo')
    const oldTodo = getByText('Old todo')
    fireEvent.click(newTodo)

    expect(newTodo).toHaveClass('completed')
    expect(oldTodo).not.toHaveClass('completed')
  })
})

function setup() {
  const rendered = render(<App />)

  function createTodo(text: string) {
    const input = getInput()
    const form = rendered.getByRole('form')

    fireEvent.change(input, { target: { value: text } })
    fireEvent.submit(form)
  }

  function getInput() {
    return rendered.getByLabelText('Todo')
  }

  return {
    ...rendered,
    createTodo,
    getInput
  }
}
