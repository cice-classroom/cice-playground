import { YesNo } from './yes-no'

export interface YesNoRepository {
  find(): Promise<YesNo>
}
