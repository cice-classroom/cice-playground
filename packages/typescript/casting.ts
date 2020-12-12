const someValue: unknown = 'this is a string'
// Avoid using this
const strLength: number = (someValue as string).length
