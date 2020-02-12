export class Carousel {
  #carouselSelector = '#carousel'
  #slidesSelector = '#carousel > *'
  #footerSelector = '#footer'

  currentIndex = 0
  numberOfSlides = 0
  carousel = document.querySelector(this.#carouselSelector)
  slides = document.querySelectorAll(this.#slidesSelector)
  footer = document.querySelector(this.#footerSelector)

  init() {
    this.numberOfSlides = this.slides.length
    this.#setSlideEvents()
    this.#setSlideIndicators()
  }

  showSlide(slideIndex) {
    this.slides[slideIndex].scrollIntoView()
  }

  nextSlide() {
    this.slides[this.currentIndex + 1].scrollIntoView()
  }

  #setSlideEvents() {
    this.slides.forEach((element, i) => (element.dataset.id = i.toString()))

    const observer = new IntersectionObserver(
      entries => {
        const currentVisibleSlide = entries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        )
        if (currentVisibleSlide.intersectionRatio > 0) {
          this.currentIndex = Number(currentVisibleSlide.target.dataset.id)
        }
      },
      {
        root: this.carousel,
        threshold: 0.5
      }
    )
    this.slides.forEach(element => observer.observe(element))
  }

  #setSlideIndicators() {
    this.footer.innerHTML = this.#range(this.numberOfSlides).reduce(
      (previousValue, currentValue) => previousValue + `<button class="indicator"></button>`,
      ''
    )
  }

  #range(upto) {
    return Array.from({ length: upto }, (v, k) => k)
  }
}
