describe('optional chaining operator', () => {
  it('should throw exception when accessing undefined', () => {
    const actual = {
      foo: {
        bar: {
          baz: 1
        }
      }
    }

    expect(() => {
      actual.foo.baz.bar
    }).toThrowError()
  })

  it('should not throw exception when accessing undefined in a safe manner', () => {
    const actual = {
      foo: {
        bar: {
          baz: 1
        }
      }
    }

    expect(() => {
      if (
        actual.foo !== undefined &&
        actual.foo.baz !== undefined &&
        actual.foo.baz.bar !== undefined
      ) {
        actual.foo.baz.bar
      }
    }).not.toThrowError()
  })

  it('should not throw exception when accessing undefined using optional chaining operator', () => {
    const actual = {
      foo: {
        bar: {
          baz: 1
        }
      }
    }

    expect(() => {
      actual.foo?.baz?.bar
    }).not.toThrowError()
  })

  it('should not throw exception when accessing undefined using optional chaining operator', () => {
    const given = {
      foo: {
        bar: {
          baz: 1
        }
      }
    }

    const actual = given.foo?.baz?.bar

    expect(actual).toBeUndefined()
  })

  it('should not throw exception when invoking a function that is possibly undefined using optional chaining operator', () => {
    const given = {
      foo: {}
    }

    expect(() => {
      given.foo.baz?.()
    }).not.toThrowError()
  })

  it('can be used with nullish coalescing operator', () => {
    const given = {
      foo: {
        bar: {
          baz: 1
        }
      }
    }

    const actual = given.foo?.baz?.bar ?? 'foo'

    expect(actual).toBe('foo')
  })

  it('can be used with arrays', () => {
    const given = [1]

    const actual = given?.[1000].toString()

    expect(actual).toBe(undefined)
  })
})
