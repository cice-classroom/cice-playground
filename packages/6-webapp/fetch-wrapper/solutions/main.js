import { HttpClient } from './http-client.js'

const httpClient = new HttpClient()
httpClient.get('https://jsonplaceholder.typicode.com/posts').then(result => {
  const titles = result.map(post => post.title)
  titles.forEach(title => {
    const li = document.createElement('li')
    const postsElement = document.querySelector('#posts')
    li.innerText = title
    postsElement.appendChild(li)
  })
})

const createPost = document.querySelector('#create-post')
createPost.addEventListener('click', () => {
  const post = {
    title: 'foo',
    id: 1,
    body: 'bar'
  }
  httpClient.post('https://jsonplaceholder.typicode.com/posts', post)
})
