export interface RandomProvider {
  provide(): number
}

export class Assigner {
  constructor(private readonly randomProvider: RandomProvider) {}

  assign(names: string[]): Record<string, string> {
    const assignments: Record<string, string> = {}
    const randomizedNames = this.randomizeArray(names)

    for (let [index, name] of randomizedNames.entries()) {
      if (name === names[index]) {
        return this.assign(names)
      }

      assignments[name] = names[index]
    }

    return assignments
  }

  private randomizeArray<T>(array: T[]) {
    const randomizedArray = array.slice()
    for (let i = randomizedArray.length - 1; i > 0; i--) {
      const j = Math.floor(this.randomProvider.provide() * (i + 1))
      ;[randomizedArray[i], randomizedArray[j]] = [randomizedArray[j], randomizedArray[i]]
    }
    return randomizedArray
  }
}
