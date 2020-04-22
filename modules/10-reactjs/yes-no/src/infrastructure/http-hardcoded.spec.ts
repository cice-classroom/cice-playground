import { Http } from './http-hardcoded'

describe('Http', () => {
  it('should make a get request', async () => {
    const { http } = setup()

    await http.get('foo')

    expect(window.fetch).toHaveBeenCalledWith('foo')
  })

  it('should make a post request', async () => {
    const { http } = setup()

    await http.post('foo', { bar: 'baz' })

    expect(window.fetch).toHaveBeenCalledWith('foo', { body: '{"bar":"baz"}', method: 'POST' })
  })

  it('should make a put request', async () => {
    const { http } = setup()

    await http.put('foo', { bar: 'baz' })

    expect(window.fetch).toHaveBeenCalledWith('foo', { body: '{"bar":"baz"}', method: 'PUT' })
  })

  it('should make a delete request', async () => {
    const { http } = setup()

    await http.delete('foo')

    expect(window.fetch).toHaveBeenCalledWith('foo', { method: 'DELETE' })
  })
})

function setup() {
  const fetchMock = jest.fn()
  fetchMock.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve() }))
  window.fetch = fetchMock

  return {
    http: new Http(),
  }
}
