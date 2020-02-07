export class PrimeNumbersFactorer {
  /**
   * @param {number} number
   * @returns {number[]}
   */
  factor(number) {
    const primes = []
    for (let i = 2; i < number; i++) {
      if (this.#isPrimeNumber(i) && number % i === 0) {
        primes.push(i)
      }
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
