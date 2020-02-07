export class Calculator {
  /**
   *
   * @param {string} string
   * @returns {*}
   */
  calculate(string) {
    const cleanString = string.replace(/ /g, '')

    let characters = ''
    const sequence = []

    for (let character of cleanString) {
      const isFoundSign = character === '+' || character === '-'
      if (isFoundSign) {
        characters = this.#isSignedFoundExceptFirsSign(sequence, characters, cleanString, character)
      } else {
        characters += character
      }
    }

    sequence.push(characters)

    return sequence.map(Number).reduce((result, value) => result + value, 0)
  }

  #isSignedFoundExceptFirsSign(numbers, tempStringifiedNumber, cleanString, character) {
    numbers.push(tempStringifiedNumber)
    tempStringifiedNumber = ''
    tempStringifiedNumber += character
    return tempStringifiedNumber
  }
}
