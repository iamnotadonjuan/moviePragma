import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeLayout from '../container/homeLayout'
import Header from '../container/header'
import HomeList from '../container/homeList'
import { listMovie } from '../../../flux/actions/homeAction'
import HomeTendency from '../container/homeTendency'
import Menu from '../../menuView/component/menu'
import SideMenu from 'react-native-side-menu'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this._listMovies()
  }

  getTwoList() {
    const { listMovie } = this.props
    var array = listMovie.slice(0)
    var val = Math.floor(array.length / 2)
    var newArray = array.splice(0, val)
    return [array, newArray]
  }


  async _listMovies() {
    const limit = '?limit=20'
    const quality = '3D'
    const url = 'list_movies.json'
    await this.props._listMovie({ limit, quality, url })
  }

  detailMovie = (data) => {
    const { navigate } = this.props.navigation
    navigate('Detail', data)
  }

  menu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen) {
    this.setState({ isOpen })
  }

  render() {
    return (
      <SideMenu
        navigation={this.props.navigation}
        menu={<Menu isOpen={this.state.isOpen} />}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenu(isOpen)}
      >
        <HomeLayout>
          <Header navigation={this.props.navigation} menu={this.menu} />
          <HomeTendency />
          <HomeList navigation={this.props.navigation} listMovie={this.getTwoList()} detailMovie={this.detailMovie} />
        </HomeLayout>
      </SideMenu>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)