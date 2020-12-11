describe('try catch', () => {
  it('should catch an error', () => {
    function throwError() {
      throw new Error('an error occurred')
    }

    try {
      throwError()
    } catch (e) {
      expect(e).toEqual(new Error('an error occurred'))
    }
  })

  it('should have optional catch clause', () => {
    function throwError() {
      throw new Error('an error occurred')
    }

    try {
      throwError()
    } catch {
      expect(true).toBe(true)
    }
  })

  it('should check for a specific error ❌', () => {
    expect.assertions(1)
    function throwError(value) {
      throw new Error(`an error occurred: ${value}`)
    }

    try {
      throwError(1)
    } catch (e) {
      if (e.message === 'an error occurred: 1') {
        expect(true).toBe(true)
      }
    }
  })

  it('should check for a specific error', () => {
    expect.assertions(1)
    class SpecificError extends Error {
      constructor() {
        super('this is a specific error')
      }
    }

    function throwError() {
      throw new SpecificError()
    }

    try {
      throwError(1)
    } catch (e) {
      if (e instanceof SpecificError) {
        expect(true).toBe(true)
      }
    }
  })

  it('should check for a specific error while rethrowing the exception', () => {
    expect.assertions(1)
    class SpecificError extends Error {
      constructor() {
        super('this is a specific error')
      }
    }

    function throwError() {
      throw new SpecificError()
    }

    try {
      throwError(1)
    } catch (e) {
      if (e instanceof SpecificError) {
        expect(true).toBe(true)
      }

      throw e
    }
  })

  it("should not be able to catch error again if we don't rethrow it", () => {
    expect.assertions(0)

    function throwError() {
      throw new Error()
    }

    function checkForError() {
      try {
        throwError()
      } catch (e) {
        console.error(e)
      }
    }

    try {
      checkForError()
    } catch (e) {
      expect(true).toBe(true)
    }
  })

  it('should have finally', () => {
    function throwError() {
      throw new Error()
    }

    expect(() => {
      try {
        throwError()
      } finally {
        expect(true).toBe(true)
      }
    }).toThrowError()
  })
})
