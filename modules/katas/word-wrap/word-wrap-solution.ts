export class WordWrapSolution {
  wrap(text: string, maxColumnLength: number): string {
    return text
      .split('')
      .map((x, i) => {
        const ending = (i + 1) % maxColumnLength === 0 && i !== 0 ? '\n' : ''
        return x + ending
      })
      .join('')
  }
}
