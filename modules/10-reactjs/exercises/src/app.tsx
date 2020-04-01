import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
import { ExerciseTwo } from './exercise-two'
import { ExerciseThree } from './exercise-three'
import { ExerciseFour } from './exercise-four'
import { ExerciseFive } from './exercise-five'
import { ExerciseSix } from './exercise-six'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/exercise-two">Exercise two</Link>
      <Link to="/exercise-three">Exercise three</Link>
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>
      <Link to="/exercise-six">Exercise six</Link>

      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
      <Route path="/exercise-two">
        <ExerciseTwo />
      </Route>
      <Route path="/exercise-three">
        <ExerciseThree />
      </Route>
      <Route path="/exercise-four">
        <ExerciseFour/>
      </Route>
      <Route path="/exercise-five">
        <ExerciseFive/>
      </Route>
      <Route path="/exercise-six">
        <ExerciseSix/>
      </Route>
    </BrowserRouter>
  )
}
