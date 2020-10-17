import React from 'react'
import { AuthManager } from './features/auth/auth-manager'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute: React.FC = ({ children, ...rest }) => {
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
