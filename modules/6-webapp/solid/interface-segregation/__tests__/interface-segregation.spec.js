import { ElectricCar, HybridCar } from '../interface-segregation-good'

describe('HybridCar', () => {
  itShouldBeARefiller(HybridCar)
  itShouldBeACharger(HybridCar)
})

describe('ElectricCar', () => {
  itShouldBeACharger(ElectricCar)
})

export function itShouldBeARefiller(clazz) {
  it('should be a Refiller', () => {
    expect(clazz.prototype.refuel).toBeDefined()
  })
}

export function itShouldBeACharger(clazz) {
  it('should be a Charger', () => {
    expect(clazz.prototype.charge).toBeDefined()
  })
}
