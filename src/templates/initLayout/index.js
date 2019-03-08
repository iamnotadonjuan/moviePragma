import React from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './style'

function LoaderLayout(props) {
  return (
    <View style={styles.container}>
      <Text>Header layout</Text>
      {props.children}
    </View>
  )
}

export default LoaderLayout