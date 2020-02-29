export class Car {
  constructor(logger) {
    this.logger = logger
  }

  move() {
    this.logger.log('moved')
    return 1
  }
}
