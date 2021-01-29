import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { UserDetailTasks } from './user-detail-tasks'
import { FC } from 'react'

export const UserDetail: FC = () => {
  const { name } = useParams()
  const history = useHistory()
  const { path } = useRouteMatch()
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
