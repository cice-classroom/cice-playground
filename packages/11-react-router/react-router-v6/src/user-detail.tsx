import React from 'react'
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { UserDetailTasks } from './user-detail-tasks'

export const UserDetail: React.FC = () => {
  const { name } = useParams()
  const history = useHistory()
  const { url, path } = useRouteMatch()
  return (
    <>
      <h1>User {name}</h1>
      <button onClick={() => history.push(`/tasks`)}>Tasks</button>
      <Switch>
        <Route path={path}>
          <h2>User</h2>
        </Route>
        <Route to="/tasks">
          <UserDetailTasks />
        </Route>
      </Switch>
    </>
  )
}
