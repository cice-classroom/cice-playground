export function failSometimes() {
  if (Math.random() > 0.5) {
    throw new Error('an error occurred')
  }

  return 42
}
