import { WordWrapSolution } from './word-wrap-solution'

describe('WordWrapSolution', () => {
  it('should wrap text with the maximum given column length', () => {
    const wordWrapSolution = new WordWrapSolution()

    const wrap = wordWrapSolution.wrap('Loremipsumdolor', 5)

    expect(wrap).toBe(`Lorem\nipsum\ndolor\n`)
  })
})
