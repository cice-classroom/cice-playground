// A class (line, test, module, system, etc) should have only a single responsibility

// Good 👍
export class Tire {
  needsChange() {
    return false
  }
}

export class FuelTank {
  isEmpty() {
    return false
  }
}

export class Engine {
  accelerate() {}
}

export class Brakes {
  brake() {}
}

export class Car {
  brakes = new Brakes()
  engine = new Engine()
  tires = [new Tire(), new Tire(), new Tire(), new Tire()]
  fuelTank = new FuelTank()

  move() {
    this.engine.accelerate()
  }

  stop() {
    this.brakes.brake()
  }

  tiresNeedToBeChanged() {
    return this.tires.every(tire => !tire.needsChange())
  }

  shouldRefuel() {
    if (this.fuelTank.isEmpty()) {
      return 'refuel'
    }
  }
}
