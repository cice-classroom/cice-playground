// Prototyped inheritance

/* function Class(value) {
  this.value = value
  return {
    method: () => {
      return this.value
    }
  }
} */

function Class(value) {
  this.value = value
}

Class.prototype.method = function () {
  return this.value
}

function ChildClass() {
  Class.call(this, 42)
}

ChildClass.prototype.childMethod = function () {
  return this.value
}

Class.hello = function () {
  return 'hi'
}

Array.prototype.foo = function () {
  return 'xD'
}

describe('prototype', () => {
  it('should be able to make an instance', () => {
    const c = new Class(42)

    const actual = c.method()

    expect(actual).toBe(42)
  })

  it('should add things to the prototype of an existing object', () => {
    const given = []

    const actual = given.foo()

    expect(actual).toBe('xD')
  })

  it('should be able to handle inheritance', () => {
    const c = new ChildClass(42)

    const actual = c.childMethod()

    expect(actual).toBe(42)
  })

  it('should support static methods', () => {
    const actual = Class.hello()

    expect(actual).toBe('hi')
  })
})
