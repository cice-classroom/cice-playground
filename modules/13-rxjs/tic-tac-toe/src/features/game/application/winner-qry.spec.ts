import { WinnerQry } from './winner-qry'
import { GetBoardQry } from './get-board-qry'
import { instance, mock, when } from 'ts-mockito'
import { of } from 'rxjs'

describe('WinnerQry', () => {
  it('should not have a winner initially', async () => {
    const { winnerQry, getBoardQry } = setup()
    when(getBoardQry.execute()).thenReturn(
      of([null, null, null, null, null, null, null, null, null])
    )

    const actual = await winnerQry.execute().toPromise()

    expect(actual).toBe(null)
  })

  it('should get the winner when one player plays the first row', async () => {
    const { winnerQry, getBoardQry } = setup()
    when(getBoardQry.execute()).thenReturn(of(['X', 'X', 'X', null, null, null, null, null, null]))

    const actual = await winnerQry.execute().toPromise()

    expect(actual).toBe('X')
  })
})

function setup() {
  const getBoardQry = mock(GetBoardQry)

  return {
    getBoardQry,
    winnerQry: new WinnerQry(instance(getBoardQry)),
  }
}
