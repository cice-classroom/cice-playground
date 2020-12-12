interface Fish {
  swim(): void
}

interface Bird {
  fly(): void
}

function getSmallPet(): Fish | Bird {
  return Math.random() > 0.5 ? { fly() {} } : { swim() {} }
}

const pet = getSmallPet()

if ('swim' in pet) {
  pet.swim()
}

// KO
if (pet.fly) {
  // KO
  pet.fly()
}

// Type guards
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

const pet2 = getSmallPet()

if (isFish(pet2)) {
  pet2.swim()
} else {
  pet2.fly()
}

// Typeof type guards
function isNumber(x: any): x is number {
  return typeof x === 'number'
}

function isString(x: any): x is string {
  return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value
  }
  if (isString(padding)) {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}
