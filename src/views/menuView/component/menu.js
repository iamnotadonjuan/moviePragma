import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuContainer from '../container/menuContainer'
import { closeMenu } from '../../../flux/actions/menuAction'
import { GoogleSignin } from 'react-native-google-signin'
import { initSession } from '../../../flux/actions'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  closeMenu = async () => {
    let isOpen = !this.props.isOpen
    await this.props._closeMenu({ isOpen })
  }

  logOut = async () => {
    try {
      const { _initSession, navigation } = this.props
      const isSignedIn = await GoogleSignin.isSignedIn()
      if (isSignedIn) {
        await GoogleSignin.revokeAccess()
        await GoogleSignin.signOut()
      }
      await _initSession(false)
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log('muchas')
    return (
      <MenuContainer closeMenu={this.closeMenu} logOut={this.logOut} />
    )
  }
}

const mapStateToProps = state => {
  return {
    listMovie: state.home.list,
    isOpen:state.menu.isOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    async _closeMenu(data) {
      await dispatch(closeMenu(data))
    },
    async _initSession(data) {
      await dispatch(initSession(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)