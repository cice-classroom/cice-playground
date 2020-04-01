describe('conditionals', () => {
  it('ternary', () => {
    const value = true

    const actual = value ? 'foo' : 'bar'

    expect(actual).toBe('foo')
  })

  it('ternary', () => {
    const value = true

    let actual
    if (value) {
      actual = 'foo'
    } else {
      actual = 'bar'
    }

    expect(actual).toBe('foo')
  })

  it('&&', () => {
    const value = true

    const actual = value && 'foo'

    expect(actual).toBe('foo')
  })

  it('&&', () => {
    const value = false

    const actual = value && 'foo'

    expect(actual).toBe(false)
  })

  it('&&', () => {
    const value = false

    let actual = false

    if (value) {
      actual = 'foo'
    }

    expect(actual).toBe(false)
  })

  it('&&', () => {
    const value = undefined

    const actual = value === undefined

    expect(actual).toBe(true)
  })

  it('&&', () => {
    const value = undefined

    let actual
    if (value === undefined) {
      actual = true
    } else {
      actual = false
    }

    expect(actual).toBe(true)
  })

  it('&&', () => {
    const value = undefined

    const actual = { pepito: value === undefined }

    expect(actual).toEqual({ pepito: true })
  })
})
