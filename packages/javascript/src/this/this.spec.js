describe('this', () => {
  it('should point to local this', () => {
    const given = {
      prop: 42,
      func() {
        return this.prop
      }
    }

    const actual = given.func()

    expect(actual).toBe(42)
  })

  it('should point to lexical this when using arrow functions', () => {
    const given = {
      prop: 42,
      func: () => {
        return this.prop
      }
    }

    expect(() => {
      given.func()
    }).toThrowError()
  })

  it('should get this depending on the function context', () => {
    var obj = { a: 'foo' }

    var a = 'bar'

    function whatsThis() {
      return this.a
    }

    const actual = whatsThis()
    whatsThis.call(obj)
    whatsThis.apply(obj)

    expect(actual).toBe('foo')
  })
})
