import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default function LoginLayout (props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#313131'
  }
})