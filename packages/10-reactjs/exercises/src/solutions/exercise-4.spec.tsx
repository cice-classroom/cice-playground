import { Exercise4 } from './exercise-4'
import { render, fireEvent } from '@testing-library/react'

const RealDate = Date

export function mockDate(isoDate: string) {
  global.Date = class extends RealDate {
    constructor() {
      super()
      return new RealDate(isoDate)
    }
  } as DateConstructor
}

export function resetDate() {
  global.Date = RealDate
}

describe('ExerciseFour', () => {
  it('should change the title', () => {
    mockDate('2020-04-01')
    const { getByRole } = render(<Exercise4 />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(document.title).toBe('2020-04-01T00:00:00.000Z')
    resetDate()
  })
})
