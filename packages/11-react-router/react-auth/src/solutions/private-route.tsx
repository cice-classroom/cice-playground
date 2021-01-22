import { FC } from 'react'
import { AuthManager } from '../features/auth/auth-manager'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute: FC = ({ children, ...rest }) => {
  const authManager = new AuthManager()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authManager.isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
