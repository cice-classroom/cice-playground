describe('reference', () => {
  it('two objects should not be equal', () => {
    const obj = { a: 1 }
    const obj2 = { a: 1 }

    expect(obj).not.toBe(obj2)
  })

  it('two objects should be equal when using toEqual', () => {
    const obj = { a: 1 }
    const obj2 = { a: 1 }

    expect(obj).toEqual(obj2)
  })

  it('should return a mutated object', () => {
    const obj = { a: 1 }

    function foo(obj) {
      obj.a = 2
      return obj
    }

    expect(foo(obj)).toEqual({ a: 2 })
  })

  it('should mutate original object, as objects are passed as reference', () => {
    const obj = { a: 1 }

    function foo(object) {
      object.a = 2
      return object
    }

    foo(obj)

    expect(obj).toEqual({ a: 2 })
  })

  it('should mutate original array, as arrays are passed as reference', () => {
    const array = [1]

    function foo(newArray) {
      newArray.push(2)
      return newArray
    }

    foo(array)

    expect(array).toEqual([1, 2])
  })

  it('should mutate original array, as arrays are passed as reference', () => {
    const array = [1]

    function foo(newArray) {
      return newArray
    }

    array.push(2)

    expect(foo(array)).toBe(array)
  })

  it('should not mutate original array', () => {
    const array = [1]

    function foo(newArray) {
      return [...newArray, 2]
    }

    array.push(2)

    expect(foo(array)).not.toBe(array)
  })
})
