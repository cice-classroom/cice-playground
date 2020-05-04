import { Game } from './game'

describe('Game', () => {
  it('should not be able to play if there is a player in that cell', () => {
    const game = new Game()
    // prettier-ignore
    game.setBoard([
      'X', 'O', 'X',
      null, null, null,
      null, null, null
    ])

    game.play(0)

    const actual = game.board
    // prettier-ignore
    expect(actual).toEqual([
      'X', 'O', 'X',
      null, null, null,
      null, null, null
    ])
  })

  it('should be able to play if there is not a player in that cell', () => {
    const game = new Game()
    // prettier-ignore
    game.setBoard([
      'X', 'O', 'X',
      null, null, null,
      null, null, null
    ])

    game.play(5)

    const actual = game.board
    // prettier-ignore
    expect(actual).toEqual([
      'X', 'O', 'X',
      null, null, 'X',
      null, null, null
    ])
  })

  it('should alternate players', () => {
    const game = new Game()
    // prettier-ignore
    game.setBoard([
      null, null, null,
      null, null, null,
      null, null, null
    ])

    game.play(0)
    game.play(1)
    game.play(2)

    const actual = game.board
    // prettier-ignore
    expect(actual).toEqual([
      'X', 'O', 'X',
      null, null, null,
      null, null, null
    ])
  })

  it('should alternate players when a player can play', () => {
    const game = new Game()
    // prettier-ignore
    game.setBoard([
      null, null, null,
      null, null, null,
      null, null, null
    ])

    game.play(0)
    game.play(0)
    game.play(0)
    game.play(1)

    const actual = game.board
    // prettier-ignore
    expect(actual).toEqual([
      'X', 'O', null,
      null, null, null,
      null, null, null
    ])
  })

  it('should check for a winner when there is a row completed', () => {
    const game = new Game()
    const mock = jest.fn()
    game.onWon(mock)
    // prettier-ignore
    game.setBoard([
      'X', 'X', null,
      null, null, null,
      null, null, null
    ])

    game.play(2)

    expect(mock).toHaveBeenCalledWith('X')
  })

  it('should check for a winner when there is a row other than the first completed', () => {
    const game = new Game()
    const mock = jest.fn()
    game.onWon(mock)
    // prettier-ignore
    game.setBoard([
      'X', 'O', 'X',
      'O', 'O', null,
      'X', null, null
    ])

    game.play(8)
    game.play(5)

    expect(mock).toHaveBeenCalledWith('O')
  })

  it('should check for a winner when the last row is the same', () => {
    const game = new Game()
    const mock = jest.fn()
    game.onWon(mock)
    // prettier-ignore
    game.setBoard([
      'O', 'O', 'X',
      'O', 'O', 'X',
      'X', 'X', null
    ])

    game.play(8)

    expect(mock).toHaveBeenCalledWith('X')
  })
})
