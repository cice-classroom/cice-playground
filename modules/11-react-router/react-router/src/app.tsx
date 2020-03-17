import React from 'react'
import './app.css'
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom'
import { Header } from './header'

export const UserDetail: React.FC = () => {
  const { name } = useParams()
  return (
    <>
      <h1>User {name}</h1>
    </>
  )
}

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>

        <Route path="/users" exact>
          <h1>Users</h1>
          {['pepito', 'menganito', 'fulanito'].map(name => (
            <Link to={`/users/${name}`} key={name}>
              {name}
            </Link>
          ))}
        </Route>
        <Route path="/users/:name">
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  )
}
