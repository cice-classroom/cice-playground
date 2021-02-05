import 'reflect-metadata'
import ReactDOM from 'react-dom'
import { container } from './container'
import { PersonalAssistant } from './personal-assistant'
import React from 'react'

const personalAssistant = container.resolve(PersonalAssistant)
const personalAssistant2 = container.resolve(PersonalAssistant)

ReactDOM.render(
  <React.StrictMode>
    <h1>
      {personalAssistant.morningRoutine('César')} - {personalAssistant2.morningRoutine('John')}
    </h1>
  </React.StrictMode>,
  document.getElementById('root')
)
