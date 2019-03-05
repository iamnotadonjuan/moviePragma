import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TendencyStyle from '../container/styles/tendencyStyle'
import { i18n } from 'react-native-i18n-localize'

function HomeTendency(props) {
  return (
    <View style={TendencyStyle.container}>
      <View style={TendencyStyle.tendency}>
        <IonIcons
          name="md-star-outline"
          color="orange"
          size={150}
        />
        <Text style={TendencyStyle.tendencyText}>{i18n.t('homeTendency.title')}</Text>
      </View>
    </View>
  )
}
export default HomeTendency