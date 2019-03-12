import React from 'react'
import DetailLayout from '../../templates/detailLayout'
import Body from '../../components/detailView/body'
import Modal from '../../components/detailView/modal'

export default function DetailView(props) {
  const {
    navigation,
    isOpenModal,
    saveFavorite,
    favorite,
    modalDetail,
    isCloseModal
  } = props
  return (
    <DetailLayout>
      <Body
        navigation={navigation}
        saveFavorite={saveFavorite}
        favorite={favorite}
        modalDetail={modalDetail}
      />
      <Modal
        navigation={navigation}
        isOpen={isOpenModal}
        isCloseModal={isCloseModal}
       
      />
    </DetailLayout>
  )
}