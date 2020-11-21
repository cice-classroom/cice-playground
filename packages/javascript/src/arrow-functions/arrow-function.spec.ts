function regularFunction() {
  return 42
}

const arrowFunction = () => {
  return 42
}

const arrowFunctionWithImplicitReturn = () => 42

const arrowFunctionWithParameters = (a: number, b: number) => a + b
const arrowFunctionWithSingleParameter = (a: number) => a
const arrowFunctionWithSingleParameterAlternative: ArrowFunction = a => a

type ArrowFunction = (a: number) => number

describe('arrow-function', () => {
  it('should execute properly', () => {
    expect(regularFunction()).toBe(42)
    expect(arrowFunction()).toBe(42)
    expect(arrowFunctionWithImplicitReturn()).toBe(42)
    expect(arrowFunctionWithParameters(1, 2)).toBe(3)
    expect(arrowFunctionWithSingleParameter(1)).toBe(1)
    expect(arrowFunctionWithSingleParameterAlternative(1)).toBe(1)
  })

  it('should be used with arrays', () => {
    const array = [1, 2, 3]

    const actual = array.map(x => x ** 2)

    expect(actual).toEqual([1, 4, 9])
  })
})
