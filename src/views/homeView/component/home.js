import { Component } from 'react'
import { connect } from 'react-redux'
import  HomeHeader from '../container/homeHeader'


class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HomeHeader />
        )
    }
}


export default Home