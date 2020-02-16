describe('fors', () => {
  it('should iterate using for in', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const actual = []

    for (const key in obj) {
      actual.push(obj[key])
    }

    expect(actual).toEqual([1, 2, 3])
  })

  it('should iterate using for in with not own properties', () => {
    const values = { a: 2, b: 3, c: 4 }
    function Foo() {
      this.prop = 1
    }
    Foo.prototype = values
    const foo = new Foo()
    const actual = []

    for (const key in foo) {
      actual.push(foo[key])
    }

    expect(actual).toEqual([1, 2, 3, 4])
  })

  it('should iterate using for in with own properties', () => {
    const values = { a: 2, b: 3, c: 4 }
    function Foo() {
      this.prop = 1
    }
    Foo.prototype = values
    const foo = new Foo()
    const actual = []

    for (const key in foo) {
      if (foo.hasOwnProperty(key)) {
        actual.push(foo[key])
      }
    }

    expect(actual).toEqual([1])
  })

  it('should iterate over array with for of', () => {
    const given = [1, 2, 3]
    const actual = []

    for (const number of given) {
      actual.push(number)
    }

    expect(actual).toEqual([1, 2, 3])
  })

  it('should iterate over a string with for of', () => {
    const given = 'hello'
    const actual = []

    for (const character of given) {
      actual.push(character)
    }

    expect(actual).toEqual(['h', 'e', 'l', 'l', 'o'])
  })

  it('should iterate over a map with for of', () => {
    const given = new Map([['foo', 'bar']])
    const actual = []

    for (const [key, value] of given) {
      actual.push([key, value])
    }

    expect(actual).toEqual([['foo', 'bar']])
  })

  it('should iterate over a generator function', () => {
    const actual = []
    function* fibonacci() {
      let [prev, curr] = [0, 1]
      while (true) {
        ;[prev, curr] = [curr, prev + curr]
        yield curr
      }
    }

    for (const n of fibonacci()) {
      actual.push(n)
      if (n >= 5) {
        break
      }
    }

    expect(actual).toEqual([1, 2, 3, 5])
  })

  it('should iterate over an iterable object', () => {
    const actual = []
    class EvenNumbers {
      #start
      #end

      constructor(start, end) {
        this.#start = start
        this.#end = end
      }

      [Symbol.iterator]() {
        let [start, end] = [this.#start, this.#end]
        return {
          next() {
            if (start <= end) {
              start += 2
            }
            if (start > end) {
              return { done: true }
            } else {
              return { value: start, done: false }
            }
          }
        }
      }
    }

    for (const element of new EvenNumbers(2, 8)) {
      actual.push(element)
    }

    expect(actual).toEqual([4, 6, 8])
  })

  it('should iterate asynchronously', async () => {
    const actual = []
    const get = number => new Promise(resolve => setTimeout(() => resolve(number), 500))
    const promiseA = get(1)
    const promiseB = get(2)

    const promises = [promiseA, promiseB]

    for await (const promise of promises) {
      actual.push(promise)
    }

    expect(actual).toEqual([1, 2])
  })
})
