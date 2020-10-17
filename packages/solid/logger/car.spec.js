import { Car } from './car'

describe('Car', () => {
  it('should log when it moves', () => {
    const fakeLogger = {
      log: jest.fn()
    }
    const car = new Car(fakeLogger)

    car.move()

    expect(fakeLogger.log).toHaveBeenCalledWith('moved')
  })
})
