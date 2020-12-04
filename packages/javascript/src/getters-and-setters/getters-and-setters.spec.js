class Person {
  constructor(firstName = '', lastName = '') {
    this._firstName = firstName
    this.lastName = lastName
  }

  get firstName() {
    return this._firstName.toUpperCase()
  }

  set firstName(newValue) {
    this._firstName = newValue
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}

describe('getters and setters', () => {
  it('should compute a value from one or more fields using a getter', () => {
    const person = new Person('Foo', 'Bar')

    const actual = person.fullName

    expect(actual).toBe('FOO Bar')
  })

  it('should call setter when assigning a new value to a field', () => {
    const person = new Person()

    person.fullName = 'Foo Bar'

    expect(person.fullName).toBe('FOO Bar')
  })
})
