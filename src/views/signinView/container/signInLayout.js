import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default function SignInLayout (props) {
  return (
    <View style={styles.content}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#313131'
  }
})
