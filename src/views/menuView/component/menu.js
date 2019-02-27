import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuContainer from '../container/menuContainer'
import { closeMenu } from '../../../flux/actions/menuAction'


class Menu extends Component {
    constructor(props) {
        super(props)
    }

    closeMenu = async () => {
        let isOpen = !this.props.isOpen
        await this.props._closeMenu({ isOpen })
    }

    render() {
        return (
            <MenuContainer closeMenu={this.closeMenu} />
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
        async _closeMenu(data) {
            await dispatch(closeMenu(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)