import React from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { Header } from './header'
import { routes } from './routes'
import { PrivateRoute } from './private-route'
import { useCan } from './features/permissions/use-can'
import { Permission } from './features/permissions/permission'

const Login: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          localStorage.setItem('access_token', 'foo')
          history.push(routes.protected)
        }}
      >
        Login
      </button>
    </>
  )
}

export const App: React.FC = () => {
  const { can, setRole } = useCan()

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path={routes.home} exact>
          <h1>Home</h1>
          <button onClick={() => localStorage.removeItem('access_token')}>Logout</button>
        </Route>
        <Route path={routes.login}>
          <Login />
        </Route>
        <PrivateRoute>
          <h1>Protected</h1>
          <button onClick={() => setRole('superadmin')}>Change role: Superadmin</button>
          <button onClick={() => setRole('admin')}>Change role: Admin</button>
          <button onClick={() => setRole('user')}>Change role: User</button>

          {can([Permission.DELETE_ENTITIES]) && <span>Visible if can DELETE</span>}
          {can([Permission.CAN_SUBSCRIBE]) && <span>Visible if can SUBSCRIBE</span>}
          {can([Permission.CAN_EDIT_USER]) && <span>Visible if can EDIT USER</span>}
          {can([Permission.CAN_EDIT_USER, Permission.CAN_SUBSCRIBE]) && (
            <span>Visible if can EDIT USER and CAN SUBSCRIBE</span>
          )}
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
