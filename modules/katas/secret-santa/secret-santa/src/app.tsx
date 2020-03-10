import React, { useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { Assigner, RandomProvider } from './assigner'

const cx = bind(styles)

export const App: React.FC = () => {
  const [name, setName] = useState('')
  const [names, setNames] = useState<string[]>([])
  const [assignees, setAssignees] = useState<Record<string, { assignee: string; show: boolean }>>(
    {}
  )
  const [hasAssigned, setHasAssigned] = useState(false)

  const onAddName = () => {
    setNames([...names, name])
    setName('')
  }

  const assign = () => {
    const randomProvider: RandomProvider = {
      provide(): number {
        return Math.random()
      }
    }

    const assigner = new Assigner(randomProvider)
    const assignees = Object.entries(assigner.assign(names)).map(([key, value]) => {
      return [key, { assignee: value, show: false }]
    })
    setAssignees(Object.fromEntries(assignees))
    setHasAssigned(true)
  }

  const show = (name: string) => {
    const newAssignees = Object.entries(assignees).map(([key, value]) => {
      if (name === key) {
        return [key, { ...value, show: !value.show }]
      }

      return [key, value]
    })
    setAssignees(Object.fromEntries(newAssignees))
  }

  return (
    <div>
      <header>
        <label>
          Nombre
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <button onClick={onAddName}>Crear</button>
        <button onClick={assign}>Asignar</button>
      </header>
      <main>
        <ul>
          {names.map(name => (
            <li key={name}>
              <span>{name}</span>{' '}
              {hasAssigned && (
                <>
                  <input
                    value={assignees[name].assignee}
                    type={assignees[name].show ? 'text' : 'password'}
                  />
                  <button onClick={() => show(name)}>Toggle</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
