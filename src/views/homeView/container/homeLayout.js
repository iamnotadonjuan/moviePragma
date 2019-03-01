import React from 'react'
import {
  View,
  ScrollView,
  SafeAreaView
} from 'react-native'
import HomeStyle from './styles/homeStyle'

function HomeLayout(props) {
  return (
    <View style={HomeStyle.container}>
      <SafeAreaView>
        <ScrollView>
          {props.children}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
export default HomeLayout