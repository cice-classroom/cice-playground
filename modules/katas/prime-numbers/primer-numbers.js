export class PrimeNumbersFactorer {
  /**
   * @param {number} number
   * @returns {number[]}
   */
  factor(number) {
    const primes = []
    let currentNumber = 2

    while (primes.reduce((a, b) => a * b, 1) !== number) {
      if (this.#isPrimeNumber(currentNumber) && number % currentNumber === 0) {
        primes.push(currentNumber)
      }
      currentNumber++
    }

    return primes
  }

  /**
   * @param number
   * @returns {boolean}
   */
  #isPrimeNumber(number) {
    return true
  }
}
