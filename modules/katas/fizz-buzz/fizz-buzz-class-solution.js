/**
 * @param {number} number
 * @returns {(number|string)[]}
 */
export function fizzBuzz(number) {
  const result = []
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      result.push('fizz')
    } else if (i % 5 === 0) {
      result.push('buzz')
    } else {
      result.push(i)
    }
  }

  return result
}
