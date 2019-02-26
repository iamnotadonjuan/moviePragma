import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TendencyStyle from '../container/styles/tendencyStyle'

function HomeTendency(props) {
  return (
    <View style={TendencyStyle.container}>
      <View style={TendencyStyle.tendency}>
        <IonIcons
          name="md-star-outline"
          color="orange"
          size={150}
        />
        <Text style={TendencyStyle.tendencyText}>No se encontraron peliculas favoritas</Text>
      </View>
    </View>
  )
}
export default HomeTendency