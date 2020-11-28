describe('conditionals', () => {
  it('ternary', () => {
    const value = true

    const actual = value ? 'foo' : 'bar'

    expect(actual).toBe('foo')
  })

  it('nested ternary', () => {
    const value = false
    const value2 = false

    const actual = value ? 'foo' : value2 ? 'bar' : 'baz'

    expect(actual).toBe('baz')
  })

  it('if else', () => {
    const value = true

    let actual
    if (value) {
      actual = 'foo'
    } else {
      actual = 'bar'
    }

    expect(actual).toBe('foo')
  })

  it('&& with true', () => {
    const value = true

    const actual = value && 'foo'

    expect(actual).toBe('foo')
  })

  it('&& with false', () => {
    const value = false

    const actual = value && 'foo'

    expect(actual).toBe(false)
  })

  it('if without comparison', () => {
    const value = false

    let actual = false

    if (value) {
      actual = 'foo'
    }

    expect(actual).toBe(false)
  })

  it('if with comparison and assignment', () => {
    const value = undefined

    let actual
    if (value === undefined) {
      actual = true
    } else {
      actual = false
    }

    expect(actual).toBe(true)
  })

  it('simplified', () => {
    const value = undefined

    const actual = value === undefined

    expect(actual).toBe(true)
  })

  it('assign value to object', () => {
    const value = undefined

    const actual = { foo: value === undefined }

    expect(actual).toEqual({ foo: true })
  })

  it('not early return', () => {
    function foo(value) {
      if (value === 1) {
        return 'bar'
      } else {
        return 'baz'
      }
    }

    const actual = foo(1)

    expect(actual).toBe('bar')
  })

  it('early return', () => {
    function foo(value) {
      if (value === 1) {
        return 'bar'
      }

      return 'baz'
    }

    const actual = foo(1)

    expect(actual).toBe('bar')
  })

  it('guards', () => {
    function foo(value) {
      if (value === undefined) {
        throw new Error("value can't be undefined")
      }

      return 'foo'
    }

    expect(() => {
      foo(undefined)
    }).toThrowError(new Error("value can't be undefined"))
  })
})
