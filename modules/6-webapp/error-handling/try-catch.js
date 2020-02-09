export function failSometimes() {
  return Math.random() > 0.5
    ? (() => {
        throw new Error('an error occured')
      })()
    : 42
}
