import './styles.css'
import { Carousel } from './carousel'

async function getComicUrl(id) {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://xkcd.com/${id + 600}/info.0.json`,
    {
      method: 'GET'
    }
  )
  const comic = await response.json()
  return comic.img
}

new Carousel().init().onNext(id => getComicUrl(id))
