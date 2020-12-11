describe('async await', () => {
  it('should create an implicit promise by using async keyword', done => {
    async function given() {
      return 42
    }

    given().then(actual => {
      expect(actual).toBe(42)
      done()
    })
  })

  it('should wait for a promise using the await keyword', async () => {
    function timer(seconds) {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          console.log(1)
          resolve(42)
        }, seconds * 1_000)
      })
      return promise
    }

    await timer(1)
    console.log(2)
    await timer(1)
    console.log(3)
    await timer(1)
    console.log(4)
  })

  it('should wait for all promise using Promise.all', async () => {
    function timer(seconds) {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve(42)
        }, seconds * 1_000)
      })
      return promise
    }

    const [a, b, c] = await Promise.all([timer(1), timer(1), timer(1)])

    expect(a + b + c).toBe(126)
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
