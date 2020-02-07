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

    for (let i = 0; i < cleanString.length; i++) {
      const isFoundSign = cleanString[i] === '+' || cleanString[i] === '-'
      if (isFoundSign) {
        const isFirstSignNegative = tempStringifiedNumber === ''
        if (isFirstSignNegative) {
          tempStringifiedNumber += cleanString[i]
        } else {
          tempStringifiedNumber = this.#isSignedFoundExceptFirsSign(
            numbers,
            tempStringifiedNumber,
            cleanString,
            i
          )
        }
      } else {
        tempStringifiedNumber += cleanString[i]
      }
    }

    numbers.push(tempStringifiedNumber)

    return numbers.map(Number).reduce((result, value) => result + value, 0)
  }

  #isSignedFoundExceptFirsSign(numbers, tempStringifiedNumber, cleanString, i) {
    numbers.push(tempStringifiedNumber)
    tempStringifiedNumber = ''
    tempStringifiedNumber += cleanString[i]
    return tempStringifiedNumber
  }
}
