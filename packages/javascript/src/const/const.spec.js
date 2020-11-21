describe('const', () => {
  it('should be a constant', () => {
    const actual = 42
    expect(actual).toBe(42)
  })

  it('should still be able to mutate an array', () => {
    const actual = [1]

    actual.push(2)

    expect(actual).toEqual([1, 2])
  })

  it('should still be able to mutate an object', () => {
    const actual = {
      foo: 2
    }

    actual.foo = 4
    actual.bar = 2

    expect(actual).toEqual({ foo: 4, bar: 2 })
  })
})
