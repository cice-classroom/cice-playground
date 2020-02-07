/**
 * @param {number} number
 * @returns {(number|string)[]}
 */
export function fizzBuzz(number) {
  const range = Array.from({ length: number }, (v, k) => k + 1)
  return range.map(number => {
    // early return
    if (number % 3 === 0) {
      return 'fizz'
    } else if (number % 5 === 0) {
      return 'buzz'
    }

    return number
  })
}
