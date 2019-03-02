import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function SignInHeader (props) {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.backButton} onPress={props.backButton}>
        <Icon name='arrow-left' size={23} color='#FDFDFD' />
      </TouchableOpacity>
      {/*<Text style={styles.headerText}>Cabecera del signin form </Text>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#191919',
    height: 50
  },
  backButton: {
    margin: 15
  },
  headerText: {
    color: '#FDFDFD'
  }
})

export default SignInHeader
