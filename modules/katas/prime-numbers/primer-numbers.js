export class PrimeNumbersFactorer {
  /**
   * @param {number} number
   * @returns {number[]}
   */
  factor(number) {
    const primes = []
    let currentNumber = 2
    let result = number

    while (primes.reduce((a, b) => a * b, 1) !== number) {
      if (result % currentNumber === 0) {
        primes.push(currentNumber)
        result /= currentNumber
      } else {
        currentNumber++
      }
    }

    return primes
  }
}
