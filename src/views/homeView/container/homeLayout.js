import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'
import HomeStyle from './styles/homeStyle'

function HomeLayout(props) {
  return (
    <View style={HomeStyle.container}>
      <ScrollView>
        {props.children}
      </ScrollView>
    </View>
  )
}
export default HomeLayout