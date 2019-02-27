import React from 'react'
import {
  View,
  ScrollView,
  SafeAreaView
} from 'react-native'

function DetailLayout(props) {
  return (
    <View style={{flex: 1,  backgroundColor: '#757575'}}>
      <SafeAreaView>
        <ScrollView>
          {props.children}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
export default DetailLayout