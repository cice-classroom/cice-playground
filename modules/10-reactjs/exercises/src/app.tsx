import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>

      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
    </BrowserRouter>
  )
}
