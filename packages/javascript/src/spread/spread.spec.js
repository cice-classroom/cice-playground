describe('spread', () => {
  it('should spread properties in arrays', () => {
    const parts = [1, 2]
    const parts2 = [4, 5]

    const actual = [...parts, 3, ...parts2]

    expect(actual).toEqual([1, 2, 3, 4, 5])
  })

  it('should copy values', () => {
    const given = [1, 2]

    const actual = [...given]
    given.push(3)

    expect(actual).toEqual([1, 2])
    expect(given).toEqual([1, 2, 3])
  })

  it('should add a new element to an array without mutating its values', () => {
    const given = [1, 2]

    const actual = [...given, 3]

    expect(given).toEqual([1, 2])
    expect(actual).toEqual([1, 2, 3])
  })

  it('should spread properties in object', () => {
    const parts = {
      a: 1,
      b: 2
    }

    const actual = { ...parts, c: 3 }

    expect(actual).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
  })

  it('should overwrite properties with spread in object', () => {
    const parts = {
      a: 1,
      b: 2
    }

    const actual = { ...parts, b: 3 }

    expect(actual).toEqual({
      a: 1,
      b: 3
    })
  })

  it('should group all arguments in a function', () => {
    function foo(...args) {
      return args.map(arg => arg ** 2)
    }

    const actual = foo(1, 2, 3)

    expect(actual).toEqual([1, 4, 9])
  })

  it('can have other arguments', () => {
    function foo(foo, bar, ...args) {
      return args.map(arg => arg + foo + bar)
    }

    const actual = foo(1, 2, 3, 4)

    expect(actual).toEqual([6, 7])
  })
})
