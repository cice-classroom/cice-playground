import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
import { ExerciseTwo } from './exercise-two'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/exercise-two">Exercise two</Link>

      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
      <Route path="/exercise-two">
        <ExerciseTwo />
      </Route>
    </BrowserRouter>
  )
}
