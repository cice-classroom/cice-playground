describe('shallow-copy', () => {
  it('should make a shallow copy', () => {
    const given = {
      a: {
        b: {
          c: 1
        }
      }
    }
    const actual = {
      ...given
    }

    expect(actual).toEqual({
      a: {
        b: {
          c: 1
        }
      }
    })
  })

  it('should not mutate inherent references when shallow copying', () => {
    const otherObject = {
      c: 1
    }
    const given = {
      a: 1,
      b: otherObject
    }

    const actual = {
      ...given
    }
    actual.a = 2

    expect(actual.a).toBe(2)
    expect(given.a).toBe(1)
  })

  it('should mutate extraneous references when shallow copying', () => {
    const otherObject = {
      c: 1
    }
    const given = {
      a: 1,
      b: otherObject
    }

    const actual = {
      ...given
    }
    actual.b.c = 3

    expect(actual.b.c).toBe(3)
    expect(otherObject.c).not.toBe(1)
  })

  it('should not mutate extraneous references when shallow copying', () => {
    const otherObject = {
      c: 1
    }
    const given = {
      a: 1,
      b: otherObject
    }

    const actual = {
      ...given,
      b: {
        ...otherObject
      }
    }
    actual.b.c = 3

    expect(actual.b.c).toBe(3)
    expect(otherObject.c).toBe(1)
  })

  it('should not mutate extraneous references when shallow copying using JSON.parse', () => {
    const otherObject = {
      c: 1
    }
    const given = {
      a: 1,
      b: otherObject
    }

    const actual = JSON.parse(JSON.stringify(given))
    actual.b.c = 3

    expect(actual.b.c).toBe(3)
    expect(otherObject.c).toBe(1)
  })
})
