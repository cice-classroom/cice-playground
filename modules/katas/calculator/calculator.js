// @ts-check

export class Calculator {
  /**
   * @param {string} string
   * @returns {number}
   */
  calculate(string) {
    const isSum = string.includes('+')
    const operationSeparator = isSum ? '+' : '-'
    const numbers = string
      .replace(/ /g, '')
      .split(operationSeparator)
      .map(Number)
    return numbers.reduce((sum, current) => (isSum ? sum + current : sum - current))
  }
}
