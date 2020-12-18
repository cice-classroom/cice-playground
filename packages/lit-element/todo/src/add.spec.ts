import { extracted } from './add'

describe('add', () => {
  it('should add', () => {
    const result = extracted()
    expect(result).toBe(2)
  })
})
