import { YesNoDto } from './yes-no-dto'

export class YesNoHttpRepository {
  async find(): Promise<YesNoDto> {
    const response = await fetch('https://yesno.wtf/api')
    const result = (await response.json()) as YesNoDto
    return result
  }
}
