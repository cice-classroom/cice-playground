import React, { Suspense, lazy } from 'react'
import './app.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Header } from './header'

const UserDetail = lazy(() => import('./user-detail-page'))

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/">
            <h1>Home</h1>
          </Route>

          <Route path="/users">
            <h1>Users</h1>
            {['pepito', 'menganito', 'fulanito'].map(name => (
              <Link to={name} key={name}>
                {name}
              </Link>
            ))}
          </Route>
          <Route path=":name" element={UserDetail} />
          <Route>
            <h1>404</h1>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}
