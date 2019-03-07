import React from 'react'
import DetailLayout from '../../templates/detailLayout'
import Body from '../detailView/body'

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
      {/* <DetailModal
        navigation={navigation}
        isOpen={isOpenModal}
        isCloseModal={isCloseModal}
      /> */}
    </DetailLayout>
  )
}