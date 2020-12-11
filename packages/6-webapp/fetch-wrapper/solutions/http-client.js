export class HttpClient {
  get(url) {
    return fetch(url).then(response => response.json())
  }

  delete(url) {
    return fetch(url, { method: 'DELETE' }).then(response => response.json())
  }

  post(url, body) {
    return fetch(url, { method: 'POST', body: JSON.stringify(body) }).then(response =>
      response.json()
    )
  }

  put(url, body) {
    return fetch(url, { method: 'PUT', body: JSON.stringify(body) }).then(response =>
      response.json()
    )
  }
}
