import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Context } from './context'
import { CustomHooks } from './custom-hooks'
import { UseEffect } from './use-effect'
import { UseReducer } from './use-reducer'
import { UseReducerOriginal } from './use-reducer-original'
import { UseStateImmutable } from './use-state-immutable'
import { UseReducerWithOptions } from './use-reducer-with-options'
import { UseReducerRefactor1 } from './use-reducer-refactor-1'
import { UseReducerRefactor2 } from './use-reducer-refactor-2'
import { UseReducerRefactor3 } from './reducer/use-reducer-refactor-3'
import { NumericInput } from './numeric-input'

export function App() {
  return (
    <BrowserRouter>
      <Link to="/numeric-input">Numeric Input</Link>
      <Link to="/context">Context</Link>
      <Link to="/custom-hooks">Custom Hooks</Link>
      <Link to="/use-effect">Use Effect</Link>
      <Link to="/use-reducer">Use Reducer</Link>
      <Link to="/use-reducer-with-options">Use With options</Link>
      <Link to="/use-reducer-original">Use Reducer Original</Link>
      <Link to="/use-reducer-refactor-1">Use Reducer Refactor 1</Link>
      <Link to="/use-reducer-refactor-2">Use Reducer Refactor 2</Link>
      <Link to="/use-state-immutable">Use State Immutable</Link>
      <Route path="/numeric-input">
        <NumericInput />
      </Route>
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
      <Route path="/use-reducer-with-options">
        <UseReducerWithOptions />
      </Route>
      <Route path="/use-reducer-refactor-1">
        <UseReducerRefactor1 />
      </Route>
      <Route path="/use-reducer-refactor-2">
        <UseReducerRefactor2 />
      </Route>
      <Route path="/use-reducer-refactor-3">
        <UseReducerRefactor3 />
      </Route>
      <Route path="/use-reducer-original">
        <UseReducerOriginal />
      </Route>
      <Route path="/use-state-immutable">
        <UseStateImmutable />
      </Route>
    </BrowserRouter>
  )
}
