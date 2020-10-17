describe('destructuring', () => {
  it('should spread properties in arrays', () => {
    const parts = [1, 2]
    const parts2 = [3, 4]

    const complete = [...parts, ...parts2]

    expect(complete).toEqual([1, 2, 3, 4])
  })

  it('should spread properties in object', () => {
    const parts = {
      a: 1,
      b: 2
    }
    const complete = { ...parts, c: 3 }

    expect(complete).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
  })

  it('should group all arguments in a function', () => {
    function foo(...args) {
      return args.map(arg => arg ** 2)
    }

    const actual = foo(1, 2, 3)

    expect(actual).toEqual([1, 4, 9])
  })

  it('should destructure keys of an object', () => {
    const obj = { a: 1, b: 2, c: 3 }

    function foo({ c }) {
      return c
    }

    const actual = foo(obj)

    expect(actual).toBe(3)
  })

  it('should destructure keys of an array', () => {
    const array = [1, 2, 3, 4]

    function foo([a, b, , c]) {
      return a + b + c
    }

    const actual = foo(array)

    expect(actual).toBe(7)
  })

  it('should ignore one or more of the keys', () => {
    const { a, ...rest } = { a: 1, b: 2, c: 3 }

    expect(rest).toEqual({
      b: 2,
      c: 3
    })
  })

  it('should rename to given value', () => {
    const { a: pepe, ...rest } = { a: 1, b: 2, c: 3 }

    expect(pepe).toBe(1)
  })

  it('should swap values', () => {
    let foo = 'foo'
    let bar = 'bar'

    ;[bar, foo] = [foo, bar]

    expect(foo).toBe('bar')
    expect(bar).toBe('foo')
  })
})
