export class Carousel {
  #lastSlide = document.querySelector('#last-slide')
  #firstSlide = document.querySelector('#first-slide')

  init() {
    this.#lastSlide.addEventListener('click', () => this.#last())
    this.#firstSlide.addEventListener('click', () => this.#first())
  }

  #last() {
    const nextElement = document.querySelector('#categories ul li:last-child')
    this.#goToElement(nextElement)
  }

  #first() {
    const nextElement = document.querySelector('#categories ul li:first-child')
    this.#goToElement(nextElement)
  }

  #goToElement(nextElement) {
    nextElement.scrollIntoView({ behavior: 'smooth' })
  }
}
