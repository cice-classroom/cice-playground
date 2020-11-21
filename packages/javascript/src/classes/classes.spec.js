class Class {
  static hello() {
    return 'hi'
  }

  constructor(value) {
    this.value = value
  }

  method() {
    return this.value
  }
}

class ChildClass extends Class {
  constructor(value) {
    super(value)
  }

  method() {
    return this.value + 1
  }
}

class NewClasses {
  #privateValue = 42
  value = 42

  static property = 'hi'

  getPrivateValue() {
    return this.#privateValue
  }

  boundFunction = () => {
    return this.#privateValue
  }
}

describe('Class', () => {
  it('should be able to make an instance', () => {
    const c = new Class(42)

    const actual = c.method()

    expect(actual).toBe(42)
  })

  it('should be able to handle inheritance', () => {
    const c = new ChildClass(42)

    const actual = c.method()

    expect(actual).toBe(43)
  })

  it('should support static methods', () => {
    const actual = Class.hello()

    expect(actual).toBe('hi')
  })

  describe('new class proposals', () => {
    it('should support field declarations (Stage 3)', () => {
      const c = new NewClasses()

      const actual = c.value

      expect(actual).toBe(42)
    })

    it('should support static field declarations (Stage 3)', () => {
      const actual = NewClasses.property

      expect(actual).toBe('hi')
    })

    it('should support private fields and methods (Stage 3)', () => {
      const c = new NewClasses()

      const actual = c.getPrivateValue()

      expect(actual).toBe(42)
    })
  })
})
