import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { Header } from './header'
import { routes } from './routes'
import { PrivateRoute } from './private-route'
import { useCan } from './features/permissions/use-can'
import { Permission } from './features/permissions/permission'
import { RoleContext } from './features/role-context'
import { Role } from './features/permissions/role'

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

export const ProtectedRoute: React.FC = () => {
  const canDelete = useCan([Permission.DELETE_ENTITIES])
  const canSubscribe = useCan([Permission.CAN_SUBSCRIBE])
  const canEdit = useCan([Permission.CAN_EDIT_USER])
  const canEditAndSubscribe = useCan([Permission.CAN_EDIT_USER, Permission.CAN_SUBSCRIBE])

  return (
    <RoleContext.Consumer>
      {({ role, setRole }) => (
        <>
          <h1>Protected</h1>
          <h2>Current role {role}</h2>
          <button onClick={() => setRole('superadmin')}>Change role: Superadmin</button>
          <button onClick={() => setRole('admin')}>Change role: Admin</button>
          <button onClick={() => setRole('user')}>Change role: User</button>

          {canDelete && <p>Visible if can DELETE</p>}
          {canSubscribe && <p>Visible if can SUBSCRIBE</p>}
          {canEdit && <p>Visible if can EDIT USER</p>}
          {canEditAndSubscribe && <p>Visible if can EDIT USER and CAN SUBSCRIBE</p>}
        </>
      )}
    </RoleContext.Consumer>
  )
}

export const App: React.FC = () => {
  const [role, setRole] = useState<Role>('user')
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <Router>
        <Header />
        <Switch>
          <Route path={routes.home} exact>
            <h1>Home</h1>
            <button onClick={() => localStorage.removeItem('access_token')}>Logout</button>
          </Route>
          <Route path={routes.login}>
            <Login />
          </Route>
          <PrivateRoute>
            <ProtectedRoute />
          </PrivateRoute>
        </Switch>
      </Router>
    </RoleContext.Provider>
  )
}
