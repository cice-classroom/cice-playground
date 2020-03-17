import React from 'react'
import './app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  )
}
