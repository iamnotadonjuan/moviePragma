import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeLayout from '../container/homeLayout'
import Header from '../container/header'
import HomeList from '../container/homeList'
import { listMovie } from '../../../flux/actions/homeAction'
import HomeTendency from '../container/homeTendency.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this._listMovies()
  }

  getTwoList(){
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

  menu = () => {
    alert('show menu')
  }

  render() {
    console.log('aqui')
    return (
      <HomeLayout>
        <Header navigation={this.props.navigation} menu={this.menu} />
        <HomeTendency />
        <HomeList navigation={this.props.navigation} listMovie ={this.getTwoList()} />
      </HomeLayout>
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