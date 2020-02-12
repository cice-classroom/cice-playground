// A class (line, test, module, system, etc) should have only a single responsibility

// Bad 👎
export class Car {
  move() {}

  stop() {}

  tiresNeedToBeChanged() {}

  shouldRefuel() {}
}
