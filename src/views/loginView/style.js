import {
  StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313131'
  },
  subContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  },
  btnContent: {
    margin: 10
  },
  sigInContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10
  },
  signInText: {
    marginLeft: 5,
    color: '#F3983E'
  },
  contentLoginOr: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },
  orText: {
    textAlign: 'center',
    color: '#FDFDFD'
  }
})