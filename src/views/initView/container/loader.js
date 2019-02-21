import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const LoaderLogin = (props) => {
  return (
    <TouchableHighlight onPress={props.pushNotification}>
      <Text>
        <Text>{props.load}</Text>
      </Text>
    </TouchableHighlight>
  )
}


export default LoaderLogin