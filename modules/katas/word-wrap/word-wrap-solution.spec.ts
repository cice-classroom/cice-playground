import { WordWrapSolution } from './word-wrap-solution'

describe('WordWrapSolution', () => {
  it('should wrap text with the maximum given column length', () => {
    const wordWrapSolution = new WordWrapSolution()

    const wrap = wordWrapSolution.wrap('12345', 1)

    expect(wrap).toBe(`1\n2\n3\n4\n5`)
  })

  it('should wrap text trying not to break word and a given maximum column length', () => {
    const wordWrapSolution = new WordWrapSolution()

    const wrap = wordWrapSolution.wrap('123456789', 3)

    expect(wrap).toBe(`123\n456\n789`)
  })
})
