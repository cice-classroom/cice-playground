import { Http } from './http'

describe('Http', () => {
  it('should get', async () => {
    const { fetcher, http } = setup()
    fetcher.mockResolvedValue({ json: jest.fn().mockResolvedValue(42) })

    const actual = await http.get('/foo/bar')

    expect(actual).toBe(42)
  })

  it('should post', async () => {
    const { fetcher, http } = setup()
    fetcher.mockResolvedValue({ json: jest.fn().mockResolvedValue(42) })

    await http.post('/foo/bar', { foo: 'bar' })

    expect(fetcher).toHaveBeenCalledWith('/foo/bar', {
      method: 'POST',
      body: '{"foo":"bar"}',
    })
  })

  it('should put', async () => {
    const { fetcher, http } = setup()
    fetcher.mockResolvedValue({ json: jest.fn().mockResolvedValue(42) })

    await http.put('/foo/bar', { foo: 'bar' })

    expect(fetcher).toHaveBeenCalledWith('/foo/bar', {
      method: 'PUT',
      body: '{"foo":"bar"}',
    })
  })

  it('should delete', async () => {
    const { fetcher, http } = setup()
    fetcher.mockResolvedValue({ json: jest.fn().mockResolvedValue(42) })

    await http.delete('/foo/bar')

    expect(fetcher).toHaveBeenCalledWith('/foo/bar', {
      method: 'DELETE',
    })
  })
})

function setup() {
  const fetcher = jest.fn()
  const http = new Http(fetcher)

  return {
    fetcher,
    http,
  }
}
