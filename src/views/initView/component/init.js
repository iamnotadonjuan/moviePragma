import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoaderLogin from '../container/loader'
import { initSession } from '../../../flux/actions'
import {
  AsyncStorage
} from 'react-native'
const global = 123


class Init extends Component {
  constructor(props) {
    super(props)
    this.state = {
      load: 'Loading...',
      isloader: false
    }
  }

  async componentDidMount() {
    await this._render()
  }

  async _render() {
    // const { navigate } = this.props.navigation
    // const idUser = await AsyncStorage.getItem('id')
    // await this.props._initSession({ idUser })
    // navigate ('Index')
  }


  notification = () => {
    alert('notification')
  }

  render() {
    return (
      <LoaderLogin load={this.state.load} pushNotification={this.notification} />
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    isloader: state.login.isloader,
    idUser: state.login.idUser
  }
}

const mapDispatchToProps = dispatch => {

  return {
    async _initSession(data) {
      await dispatch(initSession(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Init)