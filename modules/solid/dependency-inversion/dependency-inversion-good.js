// one should "depend upon abstractions, [not] concretions."

// Good 👍
/*export interface Vehicle {
  move(): void
}

export interface Engine {
  accelerate(): void
}*/

export class GasolineEngine {
  accelerate() {}
}

export class ElectricEngine {
  accelerate() {}
}

export class Car {
  constructor(engine) {
    this.engine = engine
  }

  move() {
    return this.engine.accelerate()
  }
}

export class CarFactory {
  static build(type) {
    switch (type) {
      case 'electric':
        return new Car(new ElectricEngine())
      case 'gasoline':
        return new Car(new GasolineEngine())
      default:
        throw new Error(`Can't convert type ${type} to car`)
    }
  }
}
