import React from 'react'
import {
  View,
  TextInput,
  Button
} from 'react-native'

function SignInForm (props) {
  return (
    <View>
      <TextInput
        onChangeText={(text) => props.onChangeFirstName(text)}
        value={props.user.firstName}
        placeholder='First Name'
      />
      <TextInput
        onChangeText={(text) => props.onChangeLastName(text)}
        value={props.user.lastName}
        placeholder='Last Name'
      />
      <TextInput
        onChangeText={(text) => props.onChangeEmail(text)}
        value={props.user.email}
        placeholder='Email'
      />
      <TextInput
        onChangeText={(text) => props.onChangePassword(text)}
        value={props.user.password}
        secureTextEntry={true}
        placeholder='Password'
      />
      <TextInput
        onChangeText={(text) => props.onChangeConfirmPassword(text)}
        value={props.user.confirmPassword}
        secureTextEntry={true}
        placeholder='Confirm Password'
      />
      <Button
        title='Sign in'
        onPress={props.signIn}
      />
    </View>
  )
}

export default SignInForm
