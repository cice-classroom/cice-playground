describe('spread', () => {
  it('should spread properties in arrays', () => {
    const parts = [1, 2]
    const parts2 = [3, 4]

    const actual = [...parts, ...parts2]

    expect(actual).toEqual([1, 2, 3, 4])
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

  it('should group all arguments in a function', () => {
    function foo(...args: number[]) {
      return args.map(arg => arg ** 2)
    }

    const actual = foo(1, 2, 3)

    expect(actual).toEqual([1, 4, 9])
  })
})
