import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers'
import App from './App'

let store = createStore(
  reducer,
  {
    modals: {
      isShowing: false
    },
    name: ''
  },
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  ))

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}