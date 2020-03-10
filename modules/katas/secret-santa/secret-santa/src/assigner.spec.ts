import { Assigner, RandomProvider } from './assigner'

describe('Assigner', () => {
  it('should assign each person', () => {
    const names = ['foo', 'bar', 'baz']
    const provider: RandomProvider = {
      provide: () => 0.3
    }
    const assigner = new Assigner(provider)

    const actual = assigner.assign(names)

    expect(actual).toEqual({ foo: 'bar', bar: 'baz', baz: 'foo' })
  })
})
