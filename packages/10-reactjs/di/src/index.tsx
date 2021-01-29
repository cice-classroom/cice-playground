import ReactDOM from 'react-dom'
import { container } from './container'
import { TYPES } from './types'
import { PersonalAssistant } from './personal-assistant'
import React from 'react'

const personalAssistant = container.get<PersonalAssistant>(TYPES.PERSONAL_ASSISTANT)
const personalAssistant2 = container.get<PersonalAssistant>(TYPES.PERSONAL_ASSISTANT)

ReactDOM.render(
  <React.StrictMode>
    <h1>
      {personalAssistant.morningRoutine('César')} - {personalAssistant2.morningRoutine('John')}
    </h1>
  </React.StrictMode>,
  document.getElementById('root')
)
