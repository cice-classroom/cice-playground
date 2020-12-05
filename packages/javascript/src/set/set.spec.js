describe('set', () => {
  it('should set a value', () => {
    const set = new Set()

    set.add('bar')

    expect(set).toEqual(new Set(['bar']))
  })

  it('should only store unique values', () => {
    const set = new Set()

    set.add('bar')
    set.add('bar')

    expect(set).toEqual(new Set(['bar']))
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

    map.set('foo', 'bar')
    const actual = map.has('foo')

    expect(actual).toBe(true)
  })

  it('should check that it has some value after deleting a value', () => {
    const set = new Set()

    map.set('foo', 'bar')
    map.delete('foo')
    const actual = map.has('foo')

    expect(actual).toBe(false)
  })

  it('should delete all values', () => {
    const set = new Set()

    map.set('foo', 'bar')
    map.set('bar', 'baz')
    map.clear()

    const foo = map.has('foo')
    expect(foo).toBe(false)
    const bar = map.has('bar')
    expect(bar).toBe(false)
  })

  it('should execute a callback for each value', () => {
    const set = new Set()
    const calls = []

    map.set('foo', 'bar')
    map.set('bar', 'baz')
    map.forEach((value, key) => calls.push({ value, key }))

    expect(calls).toEqual([
      { key: 'foo', value: 'bar' },
      { key: 'bar', value: 'baz' }
    ])
  })

  it('should be transformed to an array', () => {
    const set = new Set()

    map.set('foo', 'bar')
    map.set('bar', 'baz')
    const actual = Array.from(map)

    expect(actual).toEqual([
      ['foo', 'bar'],
      ['bar', 'baz']
    ])
  })

  it('should be iterated with a for loop', () => {
    const set = new Set()
    map.set('foo', 'bar')
    map.set('bar', 'baz')
    const actual = []

    for (const item of map) {
      actual.push(item)
    }

    expect(actual).toEqual([
      ['foo', 'bar'],
      ['bar', 'baz']
    ])
  })

  it('should clean an array of duplicates', () => {
    const duplicatedEntriesArray = [1, 5, 3, 2, 1, 3, 5]

    const actual = Array.from(new Set(duplicatedEntriesArray))

    expect(actual).toEqual([1, 5, 3, 2])
  })
})
