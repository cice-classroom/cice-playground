import { Assigner } from './assigner'

describe('Assigner', () => {
  it('should assign each person', () => {
    const names = ['foo', 'bar', 'baz']
    const randomNumbers = [0.1, 0.2, 0.3]
    const provider = {
      provide: () => 0.3
    }
    const assigner = new Assigner(provider)

    const actual = assigner.assign(names)

    expect(actual).toEqual({ foo: 'baz', baz: 'bar', bar: 'foo' })
  })
})
