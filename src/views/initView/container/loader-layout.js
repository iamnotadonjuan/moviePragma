import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

function LoaderLayout(props) {
  return (
    <View style={styles.container}>
      <Text>Header layout</Text>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6b6b6'
  }
})

export default LoaderLayout