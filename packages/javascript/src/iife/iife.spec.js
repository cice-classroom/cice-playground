describe('iife', () => {
  it('should auto execute a function', () => {
    const foo = []

    ;(() => {
      foo.push(1)
    })()

    expect(foo).toEqual([1])
  })
})
