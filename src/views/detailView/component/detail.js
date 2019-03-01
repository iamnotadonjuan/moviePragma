import React, { Component } from 'react'
import DetailLayout from '../container/detailLayout'
import DetailBody from '../container/detailBody'
import { connect } from 'react-redux'
import { initFavorite, saveRating } from '../../../flux/actions/detailAction'


class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: [{
        star_1: false,
        star_2: false,
        star_3: false,
        star_4: false,
        star_5: false
      }]
    }
    this._initFavorites();
  }

  async _initFavorites() {
    await this.props._initFavorite()
  }

  saveFavorite = async (data) => {
    let position = data[0]
    let value = data[1]
    let count = data[2]
    await this.props._saveRating({ position, value, count })
  }

  render() {
    return (
      <DetailLayout>
        <DetailBody navigation={this.props.navigation} saveFavorite={this.saveFavorite} favorite={this.props.favorite} />
      </DetailLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    favorite: state.detail.favorite
  }
}

const mapDispatchToProps = dispatch => {
  return {
    async _initFavorite(data) {
      await dispatch(initFavorite(data))
    },
    async _saveRating(data) {
      await dispatch(saveRating(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)