fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(result => {
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
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post, null, 2)
  })
})
