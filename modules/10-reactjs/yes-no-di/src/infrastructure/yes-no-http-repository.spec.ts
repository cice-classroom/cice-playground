import { YesNoHttpRepository } from './yes-no-http-repository'
import { deepEqual, instance, mock, verify, when } from 'ts-mockito'
import { Http } from './http'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNoMother } from './yes-no-mother'

describe('YesNoHttpRepository', () => {
  it('should call http', async () => {
    const { http, yesNoHttpRepository } = setup()

    await yesNoHttpRepository.find()

    verify(http.get('https://yesno.wtf/api/')).once()
  })

  it('should use mapper', async () => {
    const { yesNoDtoToYesNoMapper, http, yesNoHttpRepository } = setup()
    when(http.get('https://yesno.wtf/api/')).thenResolve(YesNoMother.yesDto())

    await yesNoHttpRepository.find()

    verify(yesNoDtoToYesNoMapper.map(deepEqual(YesNoMother.yesDto()))).once()
  })

  it('should return a yes no entity', async () => {
    const { yesNoDtoToYesNoMapper, http, yesNoHttpRepository } = setup()
    when(http.get('https://yesno.wtf/api/')).thenResolve(YesNoMother.yesDto())
    when(yesNoDtoToYesNoMapper.map(deepEqual(YesNoMother.yesDto()))).thenReturn(YesNoMother.yes())

    const actual = await yesNoHttpRepository.find()

    expect(actual).toEqual(YesNoMother.yes())
  })
})

function setup() {
  const http = mock(Http)
  const yesNoDtoToYesNoMapper = mock(YesNoDtoToYesNoMapper)
  const yesNoHttpRepository = new YesNoHttpRepository(
    instance(http),
    instance(yesNoDtoToYesNoMapper)
  )

  return {
    http,
    yesNoDtoToYesNoMapper,
    yesNoHttpRepository,
  }
}
