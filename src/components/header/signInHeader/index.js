import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from './style'

function SignInHeader (props) {
  const { backButton, title } = props
  return (
    <View style={styles.content}>
      <View style={styles.childContent}>
        <TouchableOpacity style={styles.backButton} onPress={backButton}>
          <Icon name='arrow-left' size={23} color='#FDFDFD' />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

export default SignInHeader
