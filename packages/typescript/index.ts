const foo: string = 'bar'
const bar: number = 1
const baz: boolean = true
const qux: string[] = ['bar', 'baz', 'qux']

// Null
let n: null = null

let a: string = 'bar'
// KO: a = null
let b: string | null = 'bar'
// OK: b = null

if (b !== null) {
  const l = b.length
  console.log(l)
}

function sum(a: number, b: number = 1): number {
  return a + b
}

const result = sum(2).toFixed(4)
console.log(result)

function concatenate(a: string, b: string | null): string {
  if (b != null) {
    return a.concat(b)
  }

  return a
}

const x = concatenate('Hello', null)
const y = concatenate('Hello ', 'world')

console.log(x)
console.log(y)

// Interfaces
interface Person {
  name: string
  age: number
  job?: string
}

const people: Person[] = [
  { age: 42, name: 'Sonia', job: 'Autentia' },
  { age: 32, name: 'Paul' }
]
const ages = people.reduce((a, b) => a + b.age, 0)
console.log(ages)

interface Greeter {
  greet(name: string): string
}

type GreeterPerson = Person & Greeter
const greeterPerson: GreeterPerson = {
  age: 54,
  name: 'Sara',
  greet(a: string): string {
    return 'hello ' + a + ", I'm " + this.name
  }
}

const greet = greeterPerson.greet('Susan')
console.log(greet)

// Clases
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance = 5) {
    console.log(this.name + ' moves...')
    super.move(distance)
  }
}

const dog = new Dog('Tobby')
dog.move()
