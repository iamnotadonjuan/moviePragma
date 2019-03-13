import React, { Component } from 'react'
import { connect } from 'react-redux'
import InitView from '../views/initView'
import { initSession, getSession } from '../flux/actions/loginAction'
import conection from '../services/firebase'
import { initLanguage } from '../../locales/langConfig'

class Init extends Component {

  constructor(props) {
    super(props)
    this.state = {
      load: 'Loading...',
      isloader: false
    }
  }

  async componentDidMount() {
    conection.initialize()
    await this._render()
    initLanguage()
  }

  async _render() {
    const { navigate } = this.props.navigation
    const loggedIn = await getSession()
    loggedIn != 'true' ? navigate('Home') : navigate('Login')
  }


  notification = () => {
    alert('notification')
  }

  render() {
    return (
      <InitView load={this.state.load} pushNotification={this.notification} />
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