import React from 'react'
import './app.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useHistory,
  useRouteMatch
} from 'react-router-dom'
import { Header } from './header'

export const UserDetailTasks: React.FC = () => {
  return (
    <ul>
      {['cuarentena', 'dar un paseo por la cocina', 'salir a comprar'].map(task => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  )
}

export const UserDetail: React.FC = () => {
  const { name } = useParams()
  const history = useHistory()
  const { url, path } = useRouteMatch()
  return (
    <>
      <h1>User {name}</h1>
      <button onClick={() => history.push(`${url}/tasks`)}>Tasks</button>
      <Switch>
        <Route path={path} exact>
          <h2>User</h2>
        </Route>
        <Route to={`${path}/tasks`} exact>
          <UserDetailTasks />
        </Route>
      </Switch>
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
