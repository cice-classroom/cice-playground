export class Calculator {
  /**
   *
   * @param {string} string
   * @returns {number}
   */
  calculate(string) {
    const cleanString = string.replace(/ /g, '')
    const sequence = this.#getSequence(cleanString)
    const numbers = sequence.map(Number)
    return numbers.reduce((result, value) => result + value, 0)
  }

  /**
   *
   * @param {string} string
   * @returns {string[]}
   */
  #getSequence(string) {
    let signedStringifiedNumber = ''
    const sequence = []

    for (let char of string) {
      const isSignFound = ['+', '-'].includes(char)
      if (isSignFound) {
        sequence.push(signedStringifiedNumber)
        signedStringifiedNumber = ''
      }
      signedStringifiedNumber += char
    }

    sequence.push(signedStringifiedNumber)
    return sequence
  }
}
