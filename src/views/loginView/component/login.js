import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Text
} from 'react-native'
import LoginHeader from '../container/loginHeader'
// import { header } from '../container/loginHeader'


class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <LoginHeader/>
        )
    }
}

export default Login 