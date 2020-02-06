export class ChangeCalculator {
  #moneyAmounts = {
    500: 1,
    200: 1,
    100: 1,
    50: 1,
    20: 1,
    10: 1,
    5: 1,
    2: 1,
    1: 1,
    0.5: 1,
    0.2: 1,
    0.1: 1,
    0.05: 1,
    0.02: 1,
    0.01: 1
  }

  calculate(money) {
    return [this.#findMatchingBill(money)]
  }

  #findMatchingBill(money) {
    return this.#moneyAmounts[money]
  }
}
