export class Carousel {
  #carouselSelector = '#carousel'
  #slidesSelector = '#carousel > *'
  #nextSlidesSelector = '#next-slides'
  #previousSlidesSelector = '#previous-slides'

  #carousel = document.querySelector(this.#carouselSelector)
  #slides = document.querySelectorAll(this.#slidesSelector)
  #nextSlides = document.querySelector(this.#nextSlidesSelector)
  #previousSlides = document.querySelector(this.#previousSlidesSelector)

  #currentIndex = 0
  #lastFetchImage = 0
  #callback = () => {}

  init() {
    this.#setSlideIndicatorsEvent()
    return this
  }

  onNext(callback) {
    this.#callback = callback.bind(this)
    this.#createNextSlide(0)
    return this
  }

  #setSlideIndicatorsEvent() {
    this.#nextSlides.addEventListener('click', async () => {
      if (this.#currentIndex === this.#lastFetchImage) {
        await this.#createNextSlide(this.#currentIndex + 1)
      }
      this.#nextSlide()
    })

    this.#previousSlides.addEventListener('click', () => {
      this.#previousSlide()
    })
  }

  #nextSlide() {
    this.#slides[this.#currentIndex + 1].scrollIntoView()
  }

  #previousSlide() {
    this.#slides[this.#currentIndex - 1].scrollIntoView()
  }

  async #createNextSlide(id) {
    const url = await this.#callback(id)
    const image = document.createElement('img')
    image.setAttribute('src', url)
    image.dataset.id = id.toString()
    this.#carousel.appendChild(image)
    this.#slides = document.querySelectorAll(this.#slidesSelector)
    this.#lastFetchImage = id
    this.#setSlideEvents()
  }

  #setSlideEvents() {
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
        threshold: 0.6
      }
    )
    this.#slides.forEach(element => observer.observe(element))
  }
}
