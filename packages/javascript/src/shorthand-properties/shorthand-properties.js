describe('shorthand properties', () => {
  it('should have a shorthand property for key and values that are the same', () => {
    const foo = 42
    const bar = 13
    const obj = {
      foo: foo,
      bar
    }
    const actualFoo = obj.foo
    const actualBar = obj.bar

    expect(actualFoo).toBe(42)
    expect(actualBar).toBe(13)
  })

  it('should have a shorthand notation for methods', () => {
    const obj = {
      foo: function () {
        return 42
      },
      bar() {
        return 13
      }
    }
    const actualFoo = obj.foo()
    const actualBar = obj.bar()

    expect(actualFoo).toBe(42)
    expect(actualBar).toBe(13)
  })

  it('should have computed property names', () => {
    const foo = 'a'
    const bar = 'b'
    const obj = {
      [foo]: 42,
      [foo + bar + 'c']: 13
    }
    const actualFoo = obj.a
    const actualBar = obj.abc

    expect(actualFoo).toBe(42)
    expect(actualBar).toBe(13)
  })
})
