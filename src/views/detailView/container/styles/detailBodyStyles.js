import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  thumbnail: {
    width: width,
    height: 500,
  },
  titleShow: {
    fontSize: 35,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'white'
  },
  text: {
    color: "#b3b3b3",
    fontSize: 20
  },
  buttonPlay: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  header: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'rgba(189, 189, 189, 0.2)',
    justifyContent: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerDescription: {
    padding: 15
  },
  textDescription: {
    color: '#BDBDBD',
    fontSize: 14
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textRatign: {
    color: '#00BCD4',
  }

})

export default styles