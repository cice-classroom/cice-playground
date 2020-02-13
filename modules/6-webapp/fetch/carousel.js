export class Carousel {
  #carouselSelector = '#carousel'
  #slidesSelector = '#carousel > *'
  #nextSlidesSelector = '#next-slides'
  #previousSlidesSelector = '#previous-slides'

  #currentIndex = 0
  #numberOfSlides = 0
  #carousel = document.querySelector(this.#carouselSelector)
  #slides = document.querySelectorAll(this.#slidesSelector)
  #nextSlides = document.querySelector(this.#nextSlidesSelector)
  #previousSlides = document.querySelector(this.#previousSlidesSelector)
  #callback = () => {}

  init() {
    this.#numberOfSlides = this.#slides.length
    this.#setSlideEvents()
    this.#setSlideIndicatorsEvent()
    return this
  }

  onNext(callback) {
    this.#callback = callback.bind(this)
    this.#nextSlide()
    return this
  }

  #previousSlide() {
    this.#slides[this.#currentIndex - 1].scrollIntoView()
  }

  async #nextSlide() {
    const url = await this.#callback()
    const image = document.createElement('img')
    image.setAttribute('src', url)
    image.dataset.id = this.#currentIndex
    this.#carousel.appendChild(image)
    const nextSlide = this.#currentIndex + 1
    this.#slides = document.querySelectorAll(this.#slidesSelector)
    this.#slides[nextSlide].scrollIntoView()
    this.#setSlideEvents()
  }

  #setSlideEvents() {
    this.#slides.forEach((element, i) => (element.dataset.id = i.toString()))

    const observer = new IntersectionObserver(
      entries => {
        const currentVisibleSlide = entries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        )
        if (currentVisibleSlide.intersectionRatio > 0) {
          this.#currentIndex = Number(currentVisibleSlide.target.dataset.id)
        }
      },
      {
        root: this.#carousel,
        threshold: 0.5
      }
    )
    this.#slides.forEach(element => observer.observe(element))
  }

  #range(upto) {
    return Array.from({ length: upto }, (v, k) => k)
  }

  #setSlideIndicatorsEvent() {
    this.#nextSlides.addEventListener('click', () => {
      this.#nextSlide()
    })

    this.#previousSlides.addEventListener('click', () => {
      this.#previousSlide()
    })
  }
}
