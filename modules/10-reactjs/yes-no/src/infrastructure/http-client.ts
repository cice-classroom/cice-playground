import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://yesno.wtf/api'
})

export { httpClient }
