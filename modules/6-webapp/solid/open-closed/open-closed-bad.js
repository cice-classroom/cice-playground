// "software entities should be open for extension, but closed for modification."

// Bad 👎
export class Truck {
  constructor() {
    this.velocity = 1
  }
}

export class Plane {
  constructor() {
    this.speed = 2
  }
}

export class MovementCalculator {
  calculate(vehicles) {
    return vehicles.reduce((previous, current) => {
      if (current instanceof Truck) {
        return previous + current.velocity
      } else if (current instanceof Plane) {
        return previous + current.speed
      }
    }, 0)
  }
}
