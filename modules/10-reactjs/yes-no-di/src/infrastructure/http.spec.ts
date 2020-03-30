import { Http } from './http'

describe('Http', () => {
  it('should make a get request', async () => {
    const { fetcher, http } = setup()

    await http.get('foo')

    expect(fetcher).toHaveBeenCalledWith('foo')
  })

  it('should make a post request', async () => {
    const { fetcher, http } = setup()

    await http.post('foo', { bar: 'baz' })

    expect(fetcher).toHaveBeenCalledWith('foo', { body: '{"bar":"baz"}', method: 'POST' })
  })

  it('should make a put request', async () => {
    const { fetcher, http } = setup()

    await http.put('foo', { bar: 'baz' })

    expect(fetcher).toHaveBeenCalledWith('foo', { body: '{"bar":"baz"}', method: 'PUT' })
  })

  it('should make a delete request', async () => {
    const { fetcher, http } = setup()

    await http.delete('foo')

    expect(fetcher).toHaveBeenCalledWith('foo', { method: 'DELETE' })
  })
})

function setup() {
  const fetcher = jest.fn()
  fetcher.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve() }))
  return {
    fetcher,
    http: new Http(fetcher)
  }
}
