import React, { FC } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Exercise1 } from './exercise-1'
import { Exercise2 } from './exercise-2'
import { Exercise3 } from './exercise-3'
import { Exercise4 } from './exercise-4'
import { Exercise5 } from './exercise-5'
import { Exercise6 } from './exercise-6'
import { Exercise7 } from './exercise-7'
import { Exercise8 } from './exercise-8'
import { Exercise9 } from './exercise-9'
import { Exercise10 } from './exercise-10'
import { Exercise11 } from './exercise-11'
import styles from './app.module.css'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <header className={styles.header}>
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
      </header>

      <Route path="/exercise-one">
        <Exercise1 />
      </Route>
      <Route path="/exercise-two">
        <Exercise2 />
      </Route>
      <Route path="/exercise-three">
        <Exercise3 />
      </Route>
      <Route path="/exercise-four">
        <Exercise4 />
      </Route>
      <Route path="/exercise-five">
        <Exercise5 />
      </Route>
      <Route path="/exercise-six">
        <Exercise6 storage={sessionStorage} />
        <Exercise6 storage={localStorage} />
      </Route>
      <Route path="/exercise-seven">
        <Exercise7 />
      </Route>
      <Route path="/exercise-eight">
        <Exercise8 percentage={70} />
      </Route>
      <Route path="/exercise-nine">
        <Exercise9 />
      </Route>
      <Route path="/exercise-ten">
        <Exercise10 />
      </Route>
      <Route path="/exercise-eleven">
        <Exercise11 />
      </Route>
    </BrowserRouter>
  )
}
