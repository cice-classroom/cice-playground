function add(a = 1, b = 1) {
  return a + b
}

function defaultParametersWithObject({ foo = 2, bar = 'qux' }) {
  return { foo, bar }
}

describe('add', () => {
  it('should add', () => {
    const actual = add(1, 2)

    expect(actual).toBe(3)
  })

  it('should have default values', () => {
    const actual = add()

    expect(actual).toBe(2)
  })

  it('should handle undefined when setting default value manually', () => {
    const actual = add(undefined, 2)

    expect(actual).toBe(3)
  })

  it('should work with default value for whole object', () => {
    const actual = defaultParametersWithObject()

    expect(actual).toEqual({ foo: 1, bar: 'baz' })
  })

  it('should work with default value for single property of object', () => {
    const actual = defaultParametersWithObject({ foo: 2 })

    expect(actual).toEqual({ foo: 2, bar: 'qux' })
  })

  it('should work without default values', () => {
    const actual = defaultParametersWithObject({ foo: 42, bar: 'hi' })

    expect(actual).toEqual({ foo: 42, bar: 'hi' })
  })
})
