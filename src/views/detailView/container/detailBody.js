import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import BodyStyles from './styles/detailBodyStyles'

function DetailBody(props) {
  return (
    <View style={BodyStyles.container}>
        <Text>body789</Text>
    </View>
  )
}
export default DetailBody