export class Calculator {
  /**
   *
   * @param {string} string
   * @returns {*}
   */
  calculate(string) {
    const hasSum = string.includes('+')
    const numbers = string.split(hasSum ? '+' : '-').map(Number)
    return numbers.reduce((result, number, index) => {
      if (hasSum) {
        return result + number
      } else {
        const shouldNotSubstract = index === 0
        if (shouldNotSubstract) {
          return number
        }
        return result - number
      }
    })
  }
}
