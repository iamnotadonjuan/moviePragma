import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoaderLogin from '../container/loader'
import { initSession } from '../../../flux/actions'


class Init extends Component {
  constructor(props) {
    super(props)
    this.state = {
      load: 'Loading...',
      isloader: false
    }
  }

  async componentDidMount() {
    await this._render()
  }

  async _render() {
    await this.props._initSession()
    console.log('await', this.props)
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
  return {
    login: state.login,
    isloader: state.login.isloader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    async _initSession(data) {
      await dispatch(initSession(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Init);