import React from 'react'
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'
import { i18n } from 'react-native-i18n-localize'

function SignInForm (props) {
  return (
    <View style={styles.content}>
      <TextInput
        onChangeText={(text) => props.onChangeFirstName(text)}
        value={props.user.firstName}
        placeholder={i18n.t('signIn.firstName')}
        placeholderTextColor='#FDFDFD'
        style={styles.textInput}
      />
      <Text style={styles.textError}>{props.userErrors.firstNameError}</Text>
      <TextInput
        onChangeText={(text) => props.onChangeLastName(text)}
        value={props.user.lastName}
        placeholder={i18n.t('signIn.lastName')}
        placeholderTextColor='#FDFDFD'
        style={styles.textInput}
      />
      <Text style={styles.textError}>{props.userErrors.lastNameError}</Text>
      <TextInput
        onChangeText={(text) => props.onChangeEmail(text)}
        value={props.user.email}
        placeholder={i18n.t('signIn.email')}
        keyboardType='email-address'
        placeholderTextColor='#FDFDFD'
        style={styles.textInput}
      />
      <Text style={styles.textError}>{props.userErrors.emailError}</Text>
      <TextInput
        onChangeText={(text) => props.onChangePassword(text)}
        value={props.user.password}
        secureTextEntry={true}
        placeholder={i18n.t('signIn.password')}
        placeholderTextColor='#FDFDFD'
        style={styles.textInput}
      />
      <Text style={styles.textError}>{props.userErrors.passwordError}</Text>
      <TextInput
        onChangeText={(text) => props.onChangeConfirmPassword(text)}
        value={props.user.confirmPassword}
        secureTextEntry={true}
        placeholder={i18n.t('signIn.confirmPassword')}
        placeholderTextColor='#FDFDFD'
        style={styles.textInput}
      />
      <Text style={styles.textError}>{props.userErrors.confirmPasswordError}</Text>
      <TouchableHighlight style={styles.loginButton} color='#313131' onPress={props.signIn}>
        <Text style={styles.textButton}>{i18n.t('signIn.signIn')}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: '#787878',
    borderColor: '#787878',
    color: '#FDFDFD',
    borderWidth: 0,
    borderRadius: 30,
    margin: 5
  },
  textDontAccount: {
    color: '#FDFDFD'
  },
  loginButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F3983E',
    borderRadius: 20,
    height: 40
  },
  textButton: {
    justifyContent: 'center',
    color: '#FDFDFD',
    textAlign: 'center'
  },
  googleButton: {
    width: 400,
    height: 50
  },
  textError: {
    color: '#ff0000',
    marginLeft: 15,
    marginBottom: 10,
  }
})

export default SignInForm
