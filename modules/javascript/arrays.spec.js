describe('arrays', () => {
  it('should obtain the power of 2 for a given number of elements', () => {
    const given = [1, 2, 3]

    const actual = given.map(x => x ** 2)

    expect(actual).toEqual([1, 4, 9])
  })

  it('should filter the even numbers', () => {
    const given = [1, 24, 3, 8, 10]

    const actual = given.filter(x => x % 2 === 0)

    expect(actual).toEqual([24, 8, 10])
  })

  it('should add all the numbers', () => {
    const given = [1, 2, 3]

    const actual = given.reduce((sum, number) => sum + number, 0)

    expect(actual).toBe(6)
  })

  it('should sort alphabetically', () => {
    const given = ['javascript', 'java', 'python', 'lua']

    const actual = given.sort((a, b) => a.localeCompare(b))

    expect(actual).toEqual(['java', 'javascript', 'lua', 'python'])
  })

  it('should filter all the animals that have more than 2 legs and get the names only', () => {
    const animals = [
      {
        name: 'giraffe',
        legs: 4
      },
      {
        name: 'dog',
        legs: 4
      },
      {
        name: 'bird',
        legs: 2
      }
    ]

    const actual = animals.filter(x => x.legs > 2).map(x => x.name)

    expect(actual).toEqual(['giraffe', 'dog'])
  })

  it('should remove vowels from a word', () => {
    const word = 'hello world'

    const actual = word
      .split('')
      .filter(x => !['a', 'e', 'i', 'o', 'u'].includes(x))
      .join('')

    expect(actual).toBe('hll wrld')
  })

  it('should return a count of all repeated elements', () => {
    const given = ['🍋', '🍉', '🍒', '🍋', '🍋', '🍎', '🍎', '🍐']

    const actual = given.reduce((count, current) => {
      if (current in count) {
        count[current]++
      } else {
        count[current] = 1
      }
      return count
    }, {})

    expect(actual).toEqual({
      '🍋': 3,
      '🍉': 1,
      '🍒': 1,
      '🍎': 2,
      '🍐': 1
    })
  })

  it('should group all objects by a property', () => {
    const given = [
      { name: 'Alice', age: 21 },
      { name: 'Max', age: 20 },
      { name: 'Jane', age: 20 }
    ]

    const actual = given.reduce((group, person) => {
      const age = person['age']
      if (!(age in group)) {
        group[age] = []
      }
      group[age].push(person)
      return group
    }, {})

    expect(actual).toEqual({
      20: [
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ],
      21: [{ name: 'Alice', age: 21 }]
    })
  })

  it('should group all books in a single array without duplicates', () => {
    const given = [
      {
        name: 'Anna',
        books: ['Dune', 'Harry Potter'],
        age: 21
      },
      {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet', 'Harry Potter'],
        age: 26
      },
      {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
      }
    ]

    const actual = Array.from(
      new Set(given.reduce((books, person) => [...books, ...person.books], []))
    )

    expect(actual).toEqual([
      'Dune',
      'Harry Potter',
      'War and peace',
      'Romeo and Juliet',
      'The Lord of the Rings',
      'The Shining'
    ])
  })

  it('should make sure every element of the array is positive', () => {
    const given = [1, -2, -5, 9]

    const actual = given.every(number => number > 0)

    expect(actual).toBe(false)
  })

  it('should add the length of all sub arrays', () => {
    const given = [1, [2, 3], [4, 5], [6, 7]]

    const actual = given.flat().length

    expect(actual).toBe(7)
  })

  it('should add the length of all sub arrays', () => {
    const given = [1, [2, 3], [4, 5], [6, 7]]

    const actual = given.flat().length

    expect(actual).toBe(7)
  })
})
