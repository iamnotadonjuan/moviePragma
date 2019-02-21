import React ,{ Component } from 'react'
import {Text} from 'react-native'
import { connect } from 'react-redux'
import { loader } from '../container/loader'


class Init extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            loader(this.props)
        )
    }
}

const mapStateToProps = state => {
    return state.login
  }
   
  const mapDispatchToProps = dispatch => {
     return {
         _initSession(data){
            dispatch(initSession(data));
         }
     }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Init);