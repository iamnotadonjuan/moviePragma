import React, { Component } from 'react'
import { connect } from 'react-redux'
import InitView from '../views/initView'
import { initSession, getSession } from '../flux/actions/loginAction'
import conection from '../services/firebase'
import { I18nLocalize } from 'react-native-i18n-localize'
import { en } from '../../locales/en'
import { es } from '../../locales/en'

class Init extends Component {

  constructor(props) {
    super(props)
    this.state = {
      load: 'Loading...',
      isloader: false
    }
    I18nLocalize.initialLanguage({ en, es })
  }

  async componentDidMount() {
    conection.initialize()
    await this._render()
    I18nLocalize.setLanguage('en')
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