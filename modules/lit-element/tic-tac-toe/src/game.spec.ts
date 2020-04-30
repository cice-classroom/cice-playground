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

    const actual = game.canPlay(0)

    expect(actual).toBe(false)
  })

  it('should  be able to play if there is not a player in that cell', () => {
    const game = new Game()
    // prettier-ignore
    game.setBoard([
      'X', 'O', 'X',
      null, null, null,
      null, null, null
    ])

    const actual = game.canPlay(5)

    expect(actual).toBe(true)
  })
})
