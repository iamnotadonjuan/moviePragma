import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'

function SignInHeader (props) {
  return (
    <View>
      <Text>Cabecera del signin form </Text>
      <Button title='Atrás' onPress={props.backButton} />
      {/*<Icon name='arrow-left' />*/}
    </View>
  )
}

export default SignInHeader
