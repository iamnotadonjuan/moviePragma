import React, { Component } from 'react'
import SignInForm from '../container/signInForm'
import update from 'immutability-helper'
import firebase from '../../../services/firebase'
import SignInHeader from '../container/signinHeader'
import {
  View
} from 'react-native'

class SignIn extends Component {

  constructor (props) {
    super (props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  signIn = async () => {
    console.log(this.state.user)
    // TODO logic firebasecreate user
  }

  backButton = () => {
    const { goBack } = this.props.navigation
    goBack()
  }

  onChangeFirstName = (value) => {
    const newUser = update(this.state.user, {
      firstName: { $set: value }
    })
    this.setState({ user: newUser })
  }

  onChangeLastName = (value) => {
    const newUser = update(this.state.user, {
      lastName: { $set: value }
    })
    this.setState({ user: newUser })
  }

  onChangeEmail = (value) => {
    const newUser = update(this.state.user, {
      email: { $set: value }
    })
    this.setState({ user: newUser })
  }

  onChangePassword = (value) => {
    const newUser = update(this.state.user, {
      password: { $set: value }
    })
    this.setState({ user: newUser })
  }

  onChangeConfirmPassword = (value) => {
    const newUser = update(this.state.user, {
      confirmPassword: { $set: value }
    })
    this.setState({ user: newUser })
  }

  render () {
    return (
      <View>
        <SignInHeader backButton={this.backButton} />
        <SignInForm user={this.state.user} onChangeFirstName={this.onChangeFirstName} onChangeLastName={this.onChangeLastName} onChangeEmail={this.onChangeEmail} onChangePassword={this.onChangePassword} onChangeConfirmPassword={this.onChangeConfirmPassword} signIn={this.signIn} />
      </View>
    )
  }
}

export default SignIn
