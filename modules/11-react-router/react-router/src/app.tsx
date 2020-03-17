import React from 'react'
import './app.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Header } from './header'

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/users">
          <h1>Users</h1>
          {['pepito', 'menganito', 'fulanito'].map(name => (
            <Link to={`users/${name}`} key={name}>
              {name}
            </Link>
          ))}
        </Route>
      </Switch>
    </Router>
  )
}
