import { Exercise1 } from './exercise-1'
import { render } from '@testing-library/react'

describe('ExerciseOne', () => {
  it('should render 50 items', () => {
    const { getAllByRole } = render(<Exercise1 />)

    const listItems = getAllByRole('listitem')

    expect(listItems).toHaveLength(50)
  })
})
