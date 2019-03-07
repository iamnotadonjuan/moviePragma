import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { styles } from './style'

function HomeTendency(props) {
  const { title } = props
  return (
    <View style={styles.container}>
      <View style={styles.tendency}>
        <IonIcons
          name="md-star-outline"
          color="orange"
          size={150}
        />
        <Text style={styles.tendencyText}>{title}</Text>
      </View>
    </View>
  )
}
export default HomeTendency