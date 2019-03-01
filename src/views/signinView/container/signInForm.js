import React from 'react'
import {
  View,
  TextInput,
  Button,
  Text
} from 'react-native'

function SignInForm (props) {
  return (
    <View>
      <TextInput
        onChangeText={(text) => props.onChangeFirstName(text)}
        value={props.user.firstName}
        placeholder='First Name'
      />
      <Text>{props.userErrors.firstNameError}</Text>
      <TextInput
        onChangeText={(text) => props.onChangeLastName(text)}
        value={props.user.lastName}
        placeholder='Last Name'
      />
      <Text>{props.userErrors.lastNameError}</Text>
      <TextInput
        onChangeText={(text) => props.onChangeEmail(text)}
        value={props.user.email}
        placeholder='Email'
        keyboardType='email-address'
      />
      <Text>{props.userErrors.emailError}</Text>
      <TextInput
        onChangeText={(text) => props.onChangePassword(text)}
        value={props.user.password}
        secureTextEntry={true}
        placeholder='Password'
      />
      <Text>{props.userErrors.passwordError}</Text>
      <TextInput
        onChangeText={(text) => props.onChangeConfirmPassword(text)}
        value={props.user.confirmPassword}
        secureTextEntry={true}
        placeholder='Confirm Password'
      />
      <Text>{props.userErrors.confirmPasswordError}</Text>
      <Button
        title='Sign in'
        onPress={props.signIn}
      />
    </View>
  )
}

export default SignInForm
