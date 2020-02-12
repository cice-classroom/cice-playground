import { ElectricCar, HybridCar } from '../interface-segregation-good'

describe('HybridCar', () => {
  it('should be a Refiller', () => {
    expect(HybridCar.prototype.charge).toBeDefined()
  })

  itShouldBeACharger(HybridCar)
})

describe('ElectricCar', () => {
  itShouldBeACharger(ElectricCar)
})

function itShouldBeACharger(clazz) {
  it('should be a Charger', () => {
    expect(clazz.prototype.refuel).toBeDefined()
  })
}
