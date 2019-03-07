import React from 'react'
import { styles } from './style'
import {
  View,
  TextInput,
  Text
} from 'react-native'
import { i18n } from 'react-native-i18n-localize'
import SignInHeader from '../../components/header/signInHeader'
import Button from '../../components/button'

function SignInView (props) {
  const {
    backButton,
    user,
    userErrors,
    onChangeFirstName,
    onChangeLastName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    signIn
  } = props
  return (
    <View style={styles.content}>
      <SignInHeader backButton={backButton} title={i18n.t('signIn.titleHeader')} />
      <View style={styles.subContent}>
        <TextInput
          onChangeText={(text) => onChangeFirstName(text)}
          value={user.firstName}
          placeholder={i18n.t('signIn.firstName')}
          placeholderTextColor='#FDFDFD'
          style={styles.textInput}
        />
        <Text style={styles.textError}>{userErrors.firstNameError}</Text>
        <TextInput
          onChangeText={(text) => onChangeLastName(text)}
          value={user.lastName}
          placeholder={i18n.t('signIn.lastName')}
          placeholderTextColor='#FDFDFD'
          style={styles.textInput}
        />
        <Text style={styles.textError}>{userErrors.lastNameError}</Text>
        <TextInput
          onChangeText={(text) => onChangeEmail(text)}
          value={user.email}
          placeholder={i18n.t('signIn.email')}
          keyboardType='email-address'
          placeholderTextColor='#FDFDFD'
          style={styles.textInput}
        />
        <Text style={styles.textError}>{userErrors.emailError}</Text>
        <TextInput
          onChangeText={(text) => onChangePassword(text)}
          value={user.password}
          secureTextEntry={true}
          placeholder={i18n.t('signIn.password')}
          placeholderTextColor='#FDFDFD'
          style={styles.textInput}
        />
        <Text style={styles.textError}>{userErrors.passwordError}</Text>
        <TextInput
          onChangeText={(text) => onChangeConfirmPassword(text)}
          value={user.confirmPassword}
          secureTextEntry={true}
          placeholder={i18n.t('signIn.confirmPassword')}
          placeholderTextColor='#FDFDFD'
          style={styles.textInput}
        />
        <Text style={styles.textError}>{userErrors.confirmPasswordError}</Text>
        <Button onPress={signIn} title={i18n.t('signIn.signIn')} />
      </View>
    </View>
  )
}

export default SignInView
