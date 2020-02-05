export function fizzBuzz(number) {
  const results = []
  for (let i = 1; i < number + 1; i++) {
    if (i % 3 === 0) {
      results.push('fizz')
    } else if (i % 5 === 0) {
      results.push('buzz')
    } else {
      results.push(i)
    }
  }

  return results
}
