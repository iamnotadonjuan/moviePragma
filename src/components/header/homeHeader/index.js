import React from 'react'
import {
  View,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from './style'

function Header(props) {
  const { menu } = props
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={menu}>
        <Icon name="bars" color="white" size={25} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigate('Search')}>
        <Icon
          name="search"
          color="white"
          size={25} />
      </TouchableWithoutFeedback>
    </View>
  )
}
export default Header
