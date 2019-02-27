import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import LoaderLayout from './loader-layout'

const LoaderLogin = (props) => {
  return (

    <LoaderLayout>
      <TouchableHighlight onPress={props.pushNotification}>
        <Text>
          <Text>{props.load}</Text>
        </Text>
      </TouchableHighlight>
    </LoaderLayout>
  )
}
export default LoaderLogin