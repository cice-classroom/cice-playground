import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Context } from './context'
import { CustomHooks } from './custom-hooks'
import { UseEffect } from './use-effect'
import { UseReducer } from './use-reducer'

export function App() {
  return (
    <BrowserRouter>
      <Link to="/context">Contexto</Link>
      <Link to="/custom-hooks">Custom Hooks</Link>
      <Link to="/use-effect">Use Effect</Link>
      <Link to="/use-reducer">Use Reducer</Link>
      <Route path="/context">
        <Context />
      </Route>
      <Route path="/context">
        <Context />
      </Route>
      <Route path="/custom-hooks">
        <CustomHooks />
      </Route>
      <Route path="/use-effect">
        <UseEffect />
      </Route>
      <Route path="/use-reducer">
        <UseReducer />
      </Route>
    </BrowserRouter>
  )
}
