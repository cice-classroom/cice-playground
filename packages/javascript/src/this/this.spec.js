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

  it('should get this depending on the function context using call', () => {
    const obj = { a: 1 }

    function given(b, c) {
      return this.a + b + c
    }

    const args = [2, 3]
    const actual = given.call(obj, ...args)

    expect(actual).toBe(6)
  })

  it('should get this depending on the function context using apply', () => {
    const obj = { a: 1 }

    function given(b, c) {
      return this.a + b + c
    }

    const args = [2, 3]
    const actual = given.apply(obj, args)

    expect(actual).toBe(6)
  })

  it('should bind a function to a given context', () => {
    const obj = { a: 1 }

    function given(b, c) {
      return this.a + b + c
    }

    const args = [2, 3]
    const bound = given.bind(obj, ...args)
    const actual = bound()

    expect(actual).toBe(6)
  })

  it('should bind this to the instance of the class', () => {
    class Example {
      constructor() {
        const proto = Object.getPrototypeOf(this)
        this.result = Object.getOwnPropertyNames(proto)
      }
      first() {}
      second() {}
      static third() {}
    }

    const example = new Example()

    expect(example.result).toEqual(['constructor', 'first', 'second'])
  })

  it('should bind this to the instance of the class but be able to change the context', () => {
    class Car {
      constructor() {
        this.sayBye = this.sayBye.bind(this)
      }

      sayHi() {
        return `Hello from ${this.name}`
      }

      sayBye() {
        return `Bye from ${this.name}`
      }

      get name() {
        return 'Ferrari'
      }
    }

    class Bird {
      get name() {
        return 'Tweety'
      }
    }

    const car = new Car()
    const bird = new Bird()

    expect(car.sayHi()).toBe('Hello from Ferrari')
    bird.sayHi = car.sayHi
    expect(bird.sayHi()).toBe('Hello from Tweety')

    bird.sayBye = car.sayBye
    expect(bird.sayBye()).toBe('Bye from Ferrari')
  })
})
