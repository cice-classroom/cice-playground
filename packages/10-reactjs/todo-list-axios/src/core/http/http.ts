import axios from 'axios'

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export { http }
