describe('promises', () => {
  it('should create a new promise and resolve a value', done => {
    expect.assertions(1)
    function given() {
      return new Promise(resolve => {
        resolve(42)
      })
    }

    given().then(actual => {
      expect(actual).toBe(42)
      done()
    })
  })

  it('should reject a new promise', done => {
    expect.assertions(1)
    function given(value) {
      return new Promise((resolve, reject) => {
        reject(42)
      })
    }

    given().catch(value => {
      expect(value).toBe(42)
      done()
    })
  })

  it('should create an implicit promise by using async keyword', done => {
    async function given() {
      return 42
    }

    given().then(actual => {
      expect(actual).toBe(42)
      done()
    })
  })

  it('should execute promises in different execution contexts', async () => {
    const calls = []

    calls.push(1)

    async function async1() {
      await async2()
      calls.push(2)
    }

    async function async2() {
      calls.push(3)
    }
    async1()

    setTimeout(() => {
      calls.push(4)
    }, 0)

    new Promise(resolve => {
      calls.push(5)
      resolve()
    })
      .then(() => {
        calls.push(6)
      })
      .then(() => {
        calls.push(7)
      })

    calls.push(8)
    await flushPromises()

    expect(calls).toEqual([1, 3, 5, 8, 2, 6, 7])
  })
})

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}
