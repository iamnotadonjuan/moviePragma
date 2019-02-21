import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoaderLogin from '../container/loader'


class Init extends Component {
  constructor(props) {
    super(props)
    this.state = {
      load: 'Loading...'
    }
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
  return state.login
}

const mapDispatchToProps = dispatch => {
  return {
    _initSession(data) {
      dispatch(initSession(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Init);