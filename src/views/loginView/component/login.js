import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginLayout from '../container/loginLayout'
import {
  ToastAndroid
} from 'react-native'
import { GoogleSignin, statusCodes } from 'react-native-google-signin'
import LoginForm from '../container/loginForm'
import { initSession } from '../../../flux/actions/loginAction'
import { saveUserInfo } from '../../../flux/actions/userAction'
import { i18n } from 'react-native-i18n-localize'
import firebase from 'firebase'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSigninInProgress: false,
      email: '',
      password: '',
      emailError: '',
      passowrdError: ''
    }
    GoogleSignin.configure()
  }

  signInGoogle = async () => {
    try {
      const { _saveUserInfo, _initSession, navigation } = this.props
      this.setState({ isSigninInProgress: true })
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      await _saveUserInfo({ displayName: userInfo.user.name, email: userInfo.user.email, uuid: userInfo.user.id })
      await _initSession(true)
      this.setState({ isSigninInProgress: false })
      navigation.navigate('Home')
    } catch (error) {
      this.setState({ isSigninInProgress: false })
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error', error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error', error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error', error)
      } else {
        console.log('error', error)
      }
    }
  }

  logIn = async () => {
    try {
      const { navigation, _saveUserInfo, _initSession } = this.props
      const { email, password } = this.state
      const validate = await this.validateLogin()
      if (validate) {
        this.setState({ isSigninInProgress: true })
        await firebase.auth().signInWithEmailAndPassword(email, password)
        const user = await firebase.auth().currentUser
        await _saveUserInfo({ displayName: user.displayName, email: user.email, uuid: user.uuid })
        await _initSession(true)
        this.setState({ isSigninInProgress: false })
        navigation.navigate('Home')
      }
    } catch (error) {
      ToastAndroid.show(i18n.t('login.errorLogin'), ToastAndroid.SHORT)
      console.log(error)
      this.setState({ isSigninInProgress: false })
    }
  }

  validateLogin = async () => {
    const { email, password } = this.state
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    this.setState({
      emailError: email != '' ? '' : i18n.t('login.emailError'),
      passwordError: password != '' ? '' : i18n.t('login.passwordError')
    })
    if (email.length > 0) {
      this.setState({
        emailError: reg.test(email) ? '' : i18n.t('login.formatEmail')
      })
    }
    if (email != '' && password != '') return true
    return false
  }

  moveToSignin = async () => {
    const { navigation } = this.props
    navigation.navigate('Signin')
  }

  changeTextEmail = (value)  => {
    this.setState({email: value})
  }

  changeTextPassword = (value) => {
    this.setState({password: value})
  }

  render() {
    return (
      <LoginLayout>
        <LoginForm
          changeTextEmail={this.changeTextEmail}
          changeTextPassword={this.changeTextPassword}
          email={this.state.email}
          password={this.state.password}
          logIn={this.logIn}
          signInGoogle={this.signInGoogle}
          isSigninInProgress={this.state.isSigninInProgress}
          moveToSignin={this.moveToSignin}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
        />
      </LoginLayout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    async _initSession(data) {
      await dispatch(initSession(data))
    },
    async _saveUserInfo(data) {
      await dispatch(saveUserInfo(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)