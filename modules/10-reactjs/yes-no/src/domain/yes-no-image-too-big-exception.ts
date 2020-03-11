export class YesNoImageTooBigException extends Error {
  constructor() {
    super("image url can't be that big")
  }
}
