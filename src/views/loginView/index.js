import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import { GoogleSigninButton } from 'react-native-google-signin'
import { i18n } from 'react-native-i18n-localize'
import Button from '../../components/button/index'
import { styles } from './style'

function LoginView (props) {
  const {
    email,
    password,
    emailError,
    passwordError,
    moveToSignin,
    changeTextEmail,
    changeTextPassword,
    signInGoogle,
    isSigninInProgress,
    onPress
  } = props
  return (
    <View style={styles.container}>
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
      <View style={styles.btnContent}>
        <Button title={i18n.t('login.btnLogin')} onPress={onPress} />
      </View>
      <View style={styles.sigInContent}>
        <Text style={styles.textDontAccount}>{i18n.t('login.dontHaveAccount')}</Text>
        <TouchableOpacity onPress={moveToSignin}>
          <Text style={styles.signInText}>{i18n.t('login.signIn')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentLoginOr}>
        <Text style={styles.orText}>{i18n.t('login.or')}</Text>
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

export default LoginView
