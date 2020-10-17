// "software entities should be open for extension, but closed for modification."

// Good 👍
/* interface Vehicle {
  // Tell, Don't Ask Principle
  move(): number
} */

class Truck {
  move() {
    return 1
  }
}

class Plane {
  move() {
    return 2
  }
}

export class MovementCalculator {
  calculate(vehicles) {
    return vehicles.reduce((previous, current) => previous + current.move(), 0)
  }
}
