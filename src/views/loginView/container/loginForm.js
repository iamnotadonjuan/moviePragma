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
  return (
    <View>
      <TextInput
        onChangeText={(text) => props.changeTextEmail(text)}
        value={props.email}
        placeholder='Email'
      />
      <TextInput
        onChangeText={(text) => props.changeTextPassword(text)}
        value={props.password}
        secureTextEntry={true}
        placeholder='Password'
      />
      <Button onPress={props.logIn} title='login' />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: 10 }}>
        <Text>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={props.moveToSignin}><Text style={{ marginLeft: 5 }}>Registrate Aquí</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
        <Text style={{ textAlign: 'center' }}>Ó</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={props.signInGoogle}
          disabled={props.isSigninInProgress} />
      </View>
    </View>
  )
}

export default LoginForm
