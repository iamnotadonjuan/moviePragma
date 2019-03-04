import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/flux/store'
import Index from './src/routers'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
