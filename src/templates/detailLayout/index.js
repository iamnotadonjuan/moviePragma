import React from 'react'
import {
  View,
  ScrollView,
  SafeAreaView
} from 'react-native'
import { styles } from './style'

function DetailLayout(props) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {props.children}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
export default DetailLayout