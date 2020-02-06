export class Calculator {
  /**
   *
   * @param {string} string
   * @returns {*}
   */
  calculate(string) {
    if (string.includes('+')) {
      const numbers = string.split('+').map(Number)
      return numbers.reduce((sum, number) => sum + number, 0)
    } else {
      const numbers = string.split('-').map(Number)
      return numbers.reduce((result, number, index) => {
        if (index === 0) {
          return number
        }
        return result - number
      })
    }
  }
}
