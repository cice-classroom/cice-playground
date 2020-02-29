import { Car, ElectricEngine, GasolineEngine } from '../dependency-inversion-good'
import { instance, mock, verify } from 'ts-mockito'

describe('ElectricCar', () => {
  it('should move using the electric engine (good)', () => {
    const { electricCar, electricEngine } = goodSetup()

    electricCar.move()

    verify(electricEngine.accelerate()).once()
  })
})

describe('GasolineCar', () => {
  it('should move (good)', () => {
    const { gasolineCar, gasolineEngine } = goodSetup()

    gasolineCar.move()

    verify(gasolineEngine.accelerate()).once()
  })
})

function goodSetup() {
  const electricEngine = mock(ElectricEngine)
  const gasolineEngine = mock(GasolineEngine)
  return {
    gasolineEngine,
    electricEngine,
    electricCar: new Car(instance(electricEngine)),
    gasolineCar: new Car(instance(gasolineEngine))
  }
}
