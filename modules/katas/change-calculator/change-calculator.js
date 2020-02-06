export class ChangeCalculator {
  #moneyAmounts = new Map([
    [500, 1],
    [200, 1],
    [100, 1],
    [50, 1],
    [20, 1],
    [10, 1],
    [5, 1],
    [2, 1],
    [1, 1],
    [0.5, 1],
    [0.2, 1],
    [0.1, 1],
    [0.05, 1],
    [0.02, 1],
    [0.01, 1]
  ])

  calculate(money, result = []) {
    const moneyAmount = this.#moneyAmounts.get(money)

    if (moneyAmount === undefined || moneyAmount === 0) {
      const amounts = Array.from(this.#moneyAmounts)
      const nextBelowMoneyAmount = amounts.findIndex(([amount, quantity]) => amount <= money && quantity > 0)
      const [immediateBelowMoneyAmount, immediateBelowMoneyQuantity] = amounts[nextBelowMoneyAmount]
      result.push(immediateBelowMoneyAmount)
      this.#moneyAmounts.set(immediateBelowMoneyAmount, immediateBelowMoneyQuantity - 1)

      return this.calculate(money - immediateBelowMoneyAmount, result)
    }

    result.push(money)
    this.#moneyAmounts.set(money, moneyAmount - 1)
    return result
  }

  configureAmounts(newAmounts) {
    this.#moneyAmounts = newAmounts
  }
}
