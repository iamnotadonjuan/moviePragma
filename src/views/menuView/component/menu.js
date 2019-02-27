import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuContainer from '../container/menuContainer'

import {
    Text
} from 'react-native'


class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MenuContainer />
        )
    }
}

const mapStateToProps = state => {
    return {
        listMovie: state.home.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        async _listMovie(data) {
            await dispatch(listMovie(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)