describe('set', () => {
  it('should set a value', () => {
    const set = new Set()

    set.add('foo')

    expect(set).toEqual(new Set(['foo']))
  })

  it('should set some value and get it', () => {
    const set = new Set()

    set.add('foo')
    const actual = Array.from(set)

    expect(actual).toEqual(['foo'])
  })

  it('should tell me the size', () => {
    const set = new Set()

    set.add('foo')
    set.add('bar')
    const actual = set.size

    expect(actual).toBe(2)
  })

  it('should check that it has some value', () => {
    const set = new Set()

    set.add('foo')
    const actual = set.has('foo')

    expect(actual).toBe(true)
  })

  it('should check that it has some value after deleting a value', () => {
    const set = new Set()

    set.add('foo')
    set.delete('foo')
    const actual = set.has('foo')

    expect(actual).toBe(false)
  })

  it('should delete all values', () => {
    const set = new Set()

    set.add('foo')
    set.add('bar')
    set.clear()

    const foo = set.has('foo')
    expect(foo).toBe(false)
    const bar = set.has('bar')
    expect(bar).toBe(false)
  })

  it('should execute a callback for each value', () => {
    const set = new Set()
    const calls = []

    set.add('foo')
    set.add('bar')
    set.forEach((value, key) => calls.push({ value, key }))

    expect(calls).toEqual([
      { key: 'foo', value: 'foo' },
      { key: 'bar', value: 'bar' }
    ])
  })

  it('should be transformed to an array', () => {
    const set = new Set()

    set.add('foo')
    set.add('bar')
    const actual = Array.from(set)

    expect(actual).toEqual(['foo', 'bar'])
  })

  it('should not have duplicates', () => {
    const given = [1, 1, 2, 2, 3]
    const set = new Set(given)

    const actual = Array.from(set)

    expect(actual).toEqual([1, 2, 3])
  })

  it('should be iterated with a for loop', () => {
    const set = new Set()
    const actual = []
    set.add('foo')
    set.add('bar')

    for (const value of set) {
      actual.push(value)
    }

    expect(actual).toEqual(['foo', 'bar'])
  })
})
