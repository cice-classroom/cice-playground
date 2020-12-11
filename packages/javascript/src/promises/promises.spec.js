describe('promises', () => {
  it('should handle asynchronous code with callback hell', () => {
    function timer(seconds, cb) {
      setTimeout(() => {
        console.log(1)
        cb()
      }, seconds * 1_000)
    }

    // Callback hell
    timer(1, () => {
      console.log(2)
      timer(1, () => {
        console.log(3)
        timer(1, () => {
          console.log(4)
          timer(1, () => {
            console.log(5)
            timer(1, () => {
              console.log(6)
            })
          })
        })
      })
    })
  })

  it('should handle asynchronous code with promises hell', () => {
    function timer(seconds) {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          console.log(1)
          resolve()
        }, seconds * 1_000)
      })
      return promise
    }

    // Promise hell
    timer(1).then(() => {
      console.log(2)
      timer(1).then(() => {
        console.log(3)
        timer(1).then(() => {
          console.log(4)
        })
      })
    })

    timer(1).then(() => {
      console.log(2)
      return timer(1).then(() => {
        console.log(3)
        return timer(1).then(() => {
          console.log(4)
        })
      })
    })
  })

  it('should handle asynchronous code with chaining promises', () => {
    function timer(seconds) {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          console.log(1)
          resolve()
        }, seconds * 1_000)
      })
      return promise
    }

    // Chaining promises
    timer(1)
      .then(() => {
        console.log(2)
        return timer(1)
      })
      .then(() => {
        console.log(3)
        return timer(1)
      })
      .then(() => {
        console.log(4)
      })
  })

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

  it('should create a new promise and resolve a value', done => {
    expect.assertions(1)
    function given() {
      return new Promise(resolve => {
        resolve(42)
      })
    }

    const result = given()

    result.then(actual => {
      expect(actual).toBe(42)
      done()
    })
  })

  it('should reject a new promise', done => {
    expect.assertions(1)
    function given() {
      return new Promise((resolve, reject) => {
        reject(42)
      })
    }

    given().catch(value => {
      expect(value).toBe(42)
      done()
    })
  })

  it('should use finally in a promise', done => {
    expect.assertions(1)
    function given() {
      return new Promise((resolve, reject) => {
        reject(42)
      })
    }

    given().finally(value => {
      expect(value).toBe(42)
      done()
    })
  })

  it('should launch different promises in parallel and wait for all of them ', done => {
    expect.assertions(1)
    function timer(seconds) {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          console.log(1)
          resolve(42)
        }, seconds * 1_000)
      })
      return promise
    }

    Promise.all([timer(1), timer(2)]).then(([a, b]) => {
      expect(a + b).toBe(84)
      done()
    })
  })
})
