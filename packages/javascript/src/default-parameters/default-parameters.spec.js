function add(a = 1, b = 1) {
  return a + b
}

function defaultParametersWithObject(obj = { foo: 1, bar: 2 }) {
  return obj.foo + obj.bar
}

function defaultParametersWithDestructuredObject(
  { foo = 2, bar = 'qux' } = { foo: 1, bar: 'baz' }
) {
  return { foo, bar }
}

describe('default parameters', () => {
  it('should be able to use regular parameters', () => {
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

  it('should work with default non destructured values for whole object', () => {
    const actual = defaultParametersWithObject()

    expect(actual).toBe(3)
  })

  it('should work with default value for whole object', () => {
    const actual = defaultParametersWithDestructuredObject()

    expect(actual).toEqual({ foo: 1, bar: 'baz' })
  })

  it('should work with default value for single property of object', () => {
    const actual = defaultParametersWithDestructuredObject({ foo: 2 })

    expect(actual).toEqual({ foo: 2, bar: 'qux' })
  })

  it('should work without default values', () => {
    const actual = defaultParametersWithDestructuredObject({ foo: 42, bar: 'hi' })

    expect(actual).toEqual({ foo: 42, bar: 'hi' })
  })
})
