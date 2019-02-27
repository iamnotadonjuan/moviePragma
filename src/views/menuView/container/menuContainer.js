import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window')

const MenuContainer = (props) => {
  return (
    <View style={styles.menu}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarImagen}>
          {/* <Image style={styles.avatar} source={require('../../image/usuario.jpg')} /> */}
          <Text style={styles.text}>PRAGMA</Text>
        </View>
        {/* <Icon name="exchange" color="white" size={25} /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#191919"
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2 + 67,
    borderColor: '#000',
    borderBottomWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 50
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 20,
  },

  avatarImagen: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#E0E0E0',
    fontSize: 15
  },

})
export default MenuContainer
