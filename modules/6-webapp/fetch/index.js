import './styles.css'
import { Carousel } from './carousel'

async function getComicUrl() {
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json', {
    method: 'GET'
  })
  const comic = await response.json()
  return comic.img
}

async function init() {
  const url = await getComicUrl()
  document.querySelectorAll('.slide').forEach(slide => slide.setAttribute('src', url))
  new Carousel().init()
}

init()
