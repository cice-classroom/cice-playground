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

  init() {
    this.#numberOfSlides = this.#slides.length
    this.#setSlideEvents()
    this.#setSlideIndicatorsEvent()
  }

  #previousSlide() {
    this.#slides[this.#currentIndex - 1].scrollIntoView()
  }

  #nextSlide() {
    this.#slides[this.#currentIndex + 1].scrollIntoView()
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
