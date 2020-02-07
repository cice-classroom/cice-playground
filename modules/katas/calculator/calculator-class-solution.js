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
      const isSignFound = ['+', '-'].includes(character)
      if (isSignFound) {
        sequence.push(characters)
        characters = ''
      }
      characters += character
    }

    sequence.push(characters)

    return sequence.map(Number).reduce((result, value) => result + value, 0)
  }
}
