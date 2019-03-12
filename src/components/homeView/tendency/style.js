import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    width: width
  },
  tendency: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tendencyText: {
    color: '#E0E0E0',
    fontSize: 20
  }
})