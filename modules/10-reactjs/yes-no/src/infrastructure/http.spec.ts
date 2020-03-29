import { Http } from './http'

describe('Http', () => {
  it('should make a get request', async () => {
    const { fetcher, http } = setup()
    fetcher.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve() }))

    await http.get('foo')

    expect(fetcher).toHaveBeenCalledWith('foo')
  })

  it('should make a post request', async () => {
    const { fetcher, http } = setup()
    fetcher.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve() }))

    await http.post('foo', { bar: 'baz' })

    expect(fetcher).toHaveBeenCalledWith('foo', { body: '{"bar":"baz"}', method: 'POST' })
  })

  it('should make a put request', async () => {
    const { fetcher, http } = setup()
    fetcher.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve() }))

    await http.put('foo', { bar: 'baz' })

    expect(fetcher).toHaveBeenCalledWith('foo', { body: '{"bar":"baz"}', method: 'PUT' })
  })

  it('should make a delete request', async () => {
    const { fetcher, http } = setup()
    fetcher.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve() }))

    await http.delete('foo')

    expect(fetcher).toHaveBeenCalledWith('foo', { method: 'DELETE' })
  })
})

function setup() {
  const fetcher = jest.fn()
  return {
    fetcher,
    http: new Http(fetcher)
  }
}
