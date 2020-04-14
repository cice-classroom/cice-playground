import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
import { ExerciseTwo } from './exercise-two'
import { ExerciseThree } from './exercise-three'
import { ExerciseFour } from './exercise-four'
import { ExerciseFive } from './exercise-five'
import { ExerciseSix } from './exercise-six'
import { ExerciseSeven } from './exercise-seven'
import { ExerciseEight } from './exercise-eight'
import { ExerciseNine } from './exercise-nine'
import { ExerciseTen } from './exercise-ten'
import { ExerciseEleven } from './exercise-eleven'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/exercise-two">Exercise two</Link>
      <Link to="/exercise-three">Exercise three</Link>
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>
      <Link to="/exercise-six">Exercise six</Link>
      <Link to="/exercise-seven">Exercise seven</Link>
      <Link to="/exercise-eight">Exercise eight</Link>
      <Link to="/exercise-nine">Exercise nine</Link>
      <Link to="/exercise-ten">Exercise ten</Link>
      <Link to="/exercise-eleven">Exercise eleven</Link>

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
        <ExerciseFour />
      </Route>
      <Route path="/exercise-five">
        <ExerciseFive />
      </Route>
      <Route path="/exercise-six">
        <ExerciseSix storage={sessionStorage} />
      </Route>
      <Route path="/exercise-seven">
        <ExerciseSeven />
      </Route>
      <Route path="/exercise-eight">
        <ExerciseEight percentage={70} />
      </Route>
      <Route path="/exercise-nine">
        <ExerciseNine />
      </Route>
      <Route path="/exercise-ten">
        <ExerciseTen />
      </Route>
      <Route path="/exercise-eleven">
        <ExerciseEleven />
      </Route>
    </BrowserRouter>
  )
}
