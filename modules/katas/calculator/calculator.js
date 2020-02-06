export class Calculator {
  /**
   *
   * @param {string} string
   * @returns {*}
   */
  calculate(string) {
    const cleanString = string
      .split('')
      .filter(x => x !== ' ')
      .join('')

    let tempStringifiedNumber = ''
    const numbers = []

    for (let i = 0; i < cleanString.length; i++) {
      if (cleanString[i] === '+' || cleanString[i] === '-') {
        if (tempStringifiedNumber === '') {
          tempStringifiedNumber += cleanString[i]
        } else {
          numbers.push(tempStringifiedNumber)
          tempStringifiedNumber = ''
          tempStringifiedNumber += cleanString[i]
        }
      } else {
        tempStringifiedNumber += cleanString[i]
      }
    }

    numbers.push(tempStringifiedNumber)

    return numbers.map(Number).reduce((result, value) => result + value, 0)
  }
}
