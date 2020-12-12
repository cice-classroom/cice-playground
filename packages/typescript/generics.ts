function identity1(arg: number): number {
  return arg
}

function identity2(arg: string): string {
  return arg
}

function identity3(arg: boolean): boolean {
  return arg
}

function identity<T>(arg: T): T {
  return arg
}

identity<string>('foo') // string
identity('foo') // string

function loggingIdentity<T>(arg: T): T {
  console.log(arg.length)
  return arg
}

function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

class Generic<T> {
  foo?: T
  bar(x: T): T {
    return x
  }
}
const generic = new Generic<string>()
generic.foo = ''
generic.bar('baz')

interface Lengthwise {
  length: number
}

function loggingConstraintIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
