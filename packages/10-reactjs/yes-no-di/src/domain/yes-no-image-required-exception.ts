export class YesNoImageRequiredException extends Error {
  constructor() {
    super('image has to be set')
  }
}
