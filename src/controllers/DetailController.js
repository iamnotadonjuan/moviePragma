import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initFavorite, saveRating, openModal } from '../flux/actions/detailAction'
import DetailView from '../views/detailView'



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
      }],
      isOpenModal: false
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

  modalDetail = async (data) => {
    const isOpenModal = this.props.isOpenModal;
    await this.props._openModal({ isOpenModal })
  }
  isCloseModal = async () => {
    const isOpenModal = this.props.isOpenModal;
    await this.props._openModal({isOpenModal})
  }

  render() {
    return (
    <DetailView
    navigation={this.props.navigation}
    isOpenModal={this.props.isOpenModal}
    saveFavorite={this.saveFavorite}
    favorite={this.state.favorite}
    modalDetail={this.modalDetail}
    isCloseModal={this.isCloseModal}
    />
    )
  }
}

const mapStateToProps = state => {
  return {
    favorite: state.detail.favorite,
    isOpenModal: state.detail.isOpenModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    async _initFavorite(data) {
      await dispatch(initFavorite(data))
    },
    async _saveRating(data) {
      await dispatch(saveRating(data))
    },
    async _openModal(data) {
      await dispatch(openModal(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)