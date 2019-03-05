import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { GoogleSigninButton } from 'react-native-google-signin'
import { i18n, withLanguage } from 'react-native-i18n-localize'


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
        placeholder={i18n.t('login.emailLabel')}
        keyboardType='email-address'
        placeholderTextColor='#FDFDFD'
        style={styles.textInput}
      />
      <Text style={styles.textError}>{emailError}</Text>
      <TextInput
        onChangeText={(text) => changeTextPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder={i18n.t('login.passwordLabel')}
        placeholderTextColor='#FDFDFD'
        style={styles.textInput}
      />
      <Text style={styles.textError}>{passwordError}</Text>
      <View style={{ margin: 10 }}>
        <TouchableHighlight style={styles.loginButton} color='#313131' onPress={logIn}>
          <Text style={styles.textButton}>{i18n.t('login.btnLogin')}</Text>
        </TouchableHighlight>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: 10 }}>
        <Text style={styles.textDontAccount}>{i18n.t('login.dontHaveAccount')}</Text>
        <TouchableOpacity onPress={moveToSignin}>
          <Text style={{ marginLeft: 5, color: '#F3983E' }}>{i18n.t('login.signIn')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
        <Text style={{ textAlign: 'center', color: '#FDFDFD' }}>{i18n.t('login.or')}</Text>
      </View>
      <View style={styles.contentGoogle}>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signInGoogle}
          disabled={isSigninInProgress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#787878',
    borderColor: '#787878',
    color: '#FDFDFD',
    borderWidth: 0,
    borderRadius: 30,
    margin: 5
  },
  contentGoogle: {
    flexDirection: 'row',
    justifyContent: 'center'
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
export default withLanguage(LoginForm)
