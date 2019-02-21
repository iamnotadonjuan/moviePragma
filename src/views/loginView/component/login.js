import { Component } from 'react'
import { connect } from 'react-redux'
import { header } from '../container/loginHeader'


class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            header(props)
        )
    }
}

export default Login 