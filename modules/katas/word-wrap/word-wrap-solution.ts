export class WordWrapSolution {
  wrap(text: string, maxColumnLength: number): string {
    if (text.length <= maxColumnLength) {
      return text
    }

    const wrappedText = text.substring(0, maxColumnLength) + '\n'
    const remainingText = text.substring(maxColumnLength)

    return wrappedText + this.wrap(remainingText, maxColumnLength)
  }
}
