describe('callbacks', () => {
  it('should execute a callback that is being passed as parameter', () => {
    function foo(cb) {
      return cb()
    }

    function bar() {
      return 42
    }

    const actual = foo(bar)

    expect(actual).toBe(42)
  })
})
