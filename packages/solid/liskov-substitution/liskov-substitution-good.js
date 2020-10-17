// Derived types must be completely substitutable for their base types.

// Good 👍
export class Car {}

/* interface Movable {
  move(): void
} */

class WorkingCar extends Car {
  move() {}
}

export class BrokenCar extends Car {}

export class ElectricCar extends WorkingCar {}

export function race() {
  const electricCar = new ElectricCar()

  const cars = [electricCar]

  return cars.map(car => car.move())
}
