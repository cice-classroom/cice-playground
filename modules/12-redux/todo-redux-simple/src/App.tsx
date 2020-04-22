import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import { Provider } from 'react-redux'
import { store } from './store'

export class App extends React.Component {
  render() {
    return <Provider store={store}> <Counter/></Provider>
  }
}
