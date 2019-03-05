import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInForm from '../container/signInForm'
import update from 'immutability-helper'
import SignInHeader from '../container/signinHeader'
import SignInLayout from '../container/signInLayout'
import { saveUserInfo } from '../../../flux/actions/userAction'
import { initSession } from '../../../flux/actions/loginAction'
import firebase from 'firebase'
import { i18n } from 'react-native-i18n-localize'

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      userErrors: {
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
      }
    }
  }

  signIn = async () => {
    const { navigation, _saveUserInfo, _initSession } = this.props
    const { user } = this.state
    try {
      const validate = await this.validateSignin()
      if (validate) {
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        const userRes = await firebase.auth().currentUser
        await userRes.updateProfile({ displayName: `${user.firstName} ${user.lastName}` })
        await _saveUserInfo({ displayName: user.displayName, email: user.email, uuid: user.uuid })
        await _initSession(true)
        navigation.navigate('Home')
      }
    } catch (error) {
      console.log(error)
    }
  }

  validateSignin = async () => {
    const { user, userErrors } = this.state
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let newUser = update(userErrors, {
      firstNameError: { $set: user.firstName == '' ? i18n.t('signIn.firstNameError') : '' },
      lastNameError: { $set: user.lastName == '' ? i18n.t('signIn.lastNameError') : '' },
      emailError: { $set: user.email == '' ? i18n.t('signIn.emailError') : reg.test(user.email) ? '' : i18n.t('signIn.formatEmail') },
      passwordError: { $set: user.password == '' ? i18n.t('signIn.passwordError') : user.password.length < 6 ? i18n.t('signIn.passwordErrorMin') : '' },
      confirmPasswordError: { $set: user.confirmPassword == '' ? i18n.t('signIn.confirmPasswordError') : user.confirmPassword.length < 6 ? i18n.t('signIn.passwordErrorMin') : '' }
    })
    if (user.password != user.confirmPassword) {
      newUser = update(newUser, {
        confirmPasswordError: { $set: i18n.t('signIn.confirmPasswordErrorMatch') }
      })
    }
    this.setState({ userErrors: newUser })
    if (user.email != '' && user.firstName != '' && user.lastName != '' && user.password != '' && user.confirmPassword != '') return true
    return false
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

  render() {
    return (
      <SignInLayout>
        <SignInHeader backButton={this.backButton} />
        <SignInForm
          user={this.state.user}
          userErrors={this.state.userErrors}
          onChangeFirstName={this.onChangeFirstName}
          onChangeLastName={this.onChangeLastName}
          onChangeEmail={this.onChangeEmail}
          onChangePassword={this.onChangePassword}
          onChangeConfirmPassword={this.onChangeConfirmPassword}
          signIn={this.signIn}
        />
      </SignInLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    async _saveUserInfo(data) {
      await dispatch(saveUserInfo(data))
    },
    async _initSession(data) {
      await dispatch(initSession(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
