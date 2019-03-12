import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listMovie } from '../flux/actions/homeAction'
import { closeMenu } from '../flux/actions/menuAction'
import HomeView from '../views/homeView'

export class HomeController extends Component {
  constructor(props) {
    super(props)
    this._listMovies()
  }

  getTwoList() {
    const { listMovie } = this.props
    if (listMovie != undefined && listMovie.length > 0) {
      var array = listMovie.slice(0)
      var val = Math.floor(array.length / 2)
      var newArray = array.splice(0, val)
      return [array, newArray]
    } else {
      return []
    }

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

  menu = async () => {
    const { isOpen } = this.props
    await this.props._closeMenu(isOpen)
  }

  render() {
    return (
      <HomeView
        navigation={this.props.navigation}
        isOpen={this.props.isOpen}
        menu={this.menu}
        getTwoList={this.getTwoList()}
        detailMovie={this.detailMovie}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    listMovie: state.home.list,
    isOpen: state.menu.isOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    async _listMovie(data) {
      await dispatch(listMovie(data))
    },
    async _closeMenu(data) {
      await dispatch(closeMenu(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeController)