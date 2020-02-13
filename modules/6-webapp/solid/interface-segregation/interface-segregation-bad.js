// "many client-specific interfaces are better than one general-purpose interface."

// Bad 👎
/* interface Car {
  refuel(): void
  charge(): void
} */

export class HybridCar {
  charge() {}

  refuel() {}
}

export class ElectricCar {
  charge() {}

  refuel() {
    throw new Error('Electric cars cant be refueled')
  }
}
