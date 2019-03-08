import React from 'react'
import {
  Text,
  TouchableHighlight
} from 'react-native'
import InitLayout from '../../templates/initLayout'

const LoaderLogin = (props) => {
  return (
    <InitLayout>
      <TouchableHighlight onPress={props.pushNotification}>
        <Text>
          <Text>{props.load}</Text>
        </Text>
      </TouchableHighlight>
    </InitLayout>
  )
}
export default LoaderLogin