// @ts-check

export class Calculator {
  /**
   * @param {string} string
   * @returns {number}
   */
  calculate(string) {
    const numbers = string
      .replace(/ /g, '')
      .split('+')
      .map(Number)
    return numbers.reduce((sum, current) => sum + current)
  }
}
