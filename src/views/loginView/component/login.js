import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View
} from 'react-native'
import LoginHeader from '../container/loginHeader'
import { GoogleSignin, statusCodes } from 'react-native-google-signin'
import LoginForm from '../container/loginForm'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSigninInProgress: false,
      email: '',
      password: ''
    }
    GoogleSignin.configure()
  }

  signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      console.log(userInfo)
      await this.isSignedIn()
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error', error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error', error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error', error)
      } else {
        console.log('error')
      }
    }
  }

  logIn = async () => {
    // TODO: Log user
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

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn()
    console.log(isSignedIn)
  }

  render() {
    return (
      <View>
        <LoginHeader />
        <LoginForm changeTextEmail={this.changeTextEmail} changeTextPassword={this.changeTextPassword} email={this.state.email} password={this.state.password} logIn={this.logIn} signInGoogle={this.signInGoogle} isSigninInProgress={this.state.isSigninInProgress} moveToSignin={this.moveToSignin} />
      </View>
    )
  }
}

export default Login 