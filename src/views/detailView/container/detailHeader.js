import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderStyle from './styles/detailheaderStyles'

function DetailHeader(props) {
  const { goBack } = props.navigation
  return (
    <View style={HeaderStyle.container}>
      <TouchableWithoutFeedback onPress={() => goBack()}>
        <Icon name="angle-left" color="white" size={25} />
      </TouchableWithoutFeedback>
    </View>
  )
}
export default DetailHeader



