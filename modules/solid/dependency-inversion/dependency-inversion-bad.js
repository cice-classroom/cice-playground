// one should "depend upon abstractions, [not] concretions."

// Bad 👎
/*interface Vehicle {
  move(): void
}

interface Engine {
  accelerate(): void
}*/

export class GasolineEngine {
  accelerate() {}
}

export class ElectricEngine {
  accelerate() {}
}

export class GasolineCar {
  engine = new GasolineEngine()

  move() {
    return this.engine.accelerate()
  }
}

export class ElectricCar {
  engine = new ElectricEngine()

  move() {
    return this.engine.accelerate()
  }
}
