// Derived types must be completely substitutable for their base types.

// Bad 👎
export class Car {
  move() {}
}

export class BrokenCar extends Car {
  move() {
    throw new Error("I can't move")
  }
}

export class ElectricCar extends Car {}

export function race() {
  const brokenCar = new BrokenCar()
  const electricCar = new ElectricCar()

  const cars = [brokenCar, electricCar]

  return cars.map(car => car.move())
}
