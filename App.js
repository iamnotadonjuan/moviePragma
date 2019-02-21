import React, { Component } from 'react'
import { Provider } from 'react-native'
import store from './src/flux/store'
import Index from './src/views'


export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
