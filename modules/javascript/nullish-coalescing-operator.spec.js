describe('nullish coalescing operator', () => {
  it('should set default value if expression is truthy', () => {
    const actual = true && 'foo'

    expect(actual).toBe('foo')
  })

  it('should not set default value if expression is falsy', () => {
    const actual = false && 'foo'

    expect(actual).toBe(false)
  })

  it('should unexpectedly set value if expression is falsy', () => {
    const actual = 0 && 'foo'

    expect(actual).toBe(0)
  })

  it('should not unexpectedly set value if expression is falsy', () => {
    const actual = 0 ?? 'foo'

    expect(actual).toBe(0)
  })

  it('should set default value if expression is null', () => {
    const actual = null ?? 'foo'

    expect(actual).toBe('foo')
  })

  it('should set default value if expression is undefined', () => {
    const actual = undefined ?? 'foo'

    expect(actual).toBe('foo')
  })
})
