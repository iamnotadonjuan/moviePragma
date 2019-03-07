import {
  StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#313131'
  },
  subContent: {
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
  textError: {
    color: '#ff0000',
    marginLeft: 15,
    marginBottom: 10,
  }
})