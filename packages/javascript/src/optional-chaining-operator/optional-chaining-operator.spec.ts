describe('optional chaining operator', () => {
  it('should throw exception when accessing undefined', () => {
    const actual = {
      foo: {
        bar: {
          baz: 1
        }
      }
    } as any

    expect(() => {
      actual.foo.baz.bar
    }).toThrowError()
  })

  it('should not throw exception when accessing undefined using optional chaining operator', () => {
    const actual = {
      foo: {
        bar: {
          baz: 1
        }
      }
    } as any

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
    } as any

    const actual = given.foo?.baz?.bar

    expect(actual).toBeUndefined()
  })
})
