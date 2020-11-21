describe('template literals', () => {
  it('should handle multiline', () => {
    const actual = `lorem
ipsum
dolor
`

    expect(actual).toBe('lorem\nipsum\ndolor\n')
  })

  it('should handle tabs', () => {
    const actual = `lorem
  ipsum
dolor
`

    expect(actual).toBe('lorem\n  ipsum\ndolor\n')
  })

  it('should handle expressions', () => {
    const a = 1
    const b = 2
    const actual = `${a} + ${b} = ${a + b}`

    expect(actual).toBe('1 + 2 = 3')
  })

  it('should handle being executed as a function', () => {
    const taggedTemplates = (strings, ...values) => {
      let str = ''
      strings.forEach((string, i) => {
        str += string + (values[i] ?? '').toUpperCase()
      })
      return str
    }
    const world = 'world'
    const actual = taggedTemplates`hello ${world}`

    expect(actual).toBe('hello WORLD')
  })
})
