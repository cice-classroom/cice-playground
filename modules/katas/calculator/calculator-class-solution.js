export class Calculator {
  /**
   *
   * @param {string} string
   * @returns {*}
   */
  calculate(string) {
    const cleanString = string.replace(/ /g, '')

    let tempStringifiedNumber = ''
    const numbers = []

    for (let character of cleanString) {
      const isFoundSign = character === '+' || character === '-'
      if (isFoundSign) {
        tempStringifiedNumber = this.#isSignedFoundExceptFirsSign(
          numbers,
          tempStringifiedNumber,
          cleanString,
          character
        )
      } else {
        tempStringifiedNumber += character
      }
    }

    numbers.push(tempStringifiedNumber)

    return numbers.map(Number).reduce((result, value) => result + value, 0)
  }

  #isSignedFoundExceptFirsSign(numbers, tempStringifiedNumber, cleanString, character) {
    numbers.push(tempStringifiedNumber)
    tempStringifiedNumber = ''
    tempStringifiedNumber += character
    return tempStringifiedNumber
  }
}
