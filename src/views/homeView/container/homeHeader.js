import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const HomeHeader = (props) => {
  return (
    <TouchableHighlight onPress={props.pushNotification}>
      <Text>
        <Text>{props}</Text>
      </Text>
    </TouchableHighlight>
  )
}
export default HomeHeader