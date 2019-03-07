import React from 'react'
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native'
import { styles } from './style'

function Button (props) {
  const { title, onPress } = props
  return (
    <View>
      <TouchableHighlight style={styles.loginButton} color='#313131' onPress={onPress}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Button
