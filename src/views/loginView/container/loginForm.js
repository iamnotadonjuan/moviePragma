import React from 'react'
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity
} from 'react-native'
import { GoogleSigninButton } from 'react-native-google-signin'


function LoginForm (props) {
  const {
    email,
    password,
    logIn,
    emailError,
    passwordError,
    moveToSignin,
    changeTextEmail,
    changeTextPassword,
    signInGoogle,
    isSigninInProgress
  } = props
  return (
    <View>
      <TextInput
        onChangeText={(text) => changeTextEmail(text)}
        value={email}
        placeholder='Email'
        keyboardType='email-address'
      />
      <Text>{emailError}</Text>
      <TextInput
        onChangeText={(text) => changeTextPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder='Password'
      />
      <Text>{passwordError}</Text>
      <Button onPress={logIn} title='login' />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: 10 }}>
        <Text>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={moveToSignin}><Text style={{ marginLeft: 5 }}>Registrate Aquí</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
        <Text style={{ textAlign: 'center' }}>Ó</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInGoogle}
          disabled={isSigninInProgress} />
      </View>
    </View>
  )
}

export default LoginForm
