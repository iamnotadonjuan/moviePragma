import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

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
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.textWithIcon}>
          <View style={styles.withIcon}>
            <Icon
              style={styles.iconWidthText}
              name="download"
              color="white"
              size={28}
            />
            <Text style={styles.text}>My Downloads</Text>
          </View>
          <Icon
            style={styles.rightIcon}
            name="angle-right"
            color="white"
            size={25}
          />
        </View>
        <View style={styles.textWithIcon}>
          <View style={styles.withIcon}>
            <IonIcons
              style={styles.iconWidthText}
              name="md-checkmark"
              color="white"
              size={28}
            />
            <Text style={styles.text}>My List</Text>
          </View>
          <Icon
            style={styles.rightIcon}
            name="angle-right"
            color="white"
            size={25}
          />
        </View>
        <View style={[styles.items, styles.itemSelected]}>
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Available for Download</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Netflix Originals</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Tv Show</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Actions & Aventure</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>children & Family Movies</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Comedies</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Documentaries</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Dramas</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Independent Movies</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>Indian Movies</Text>
        </View>
      </ScrollView>
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
    color: '#b3b3b3',
    fontSize: 15
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderColor: '#000',
    borderBottomWidth: 3,
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  scrollContainer: {
    width: width / 2 + 67
  },
  rightIcon: {
    paddingRight: 20
  },
  iconWidthText: {
    paddingRight: 10,
    paddingLeft: 20
  },
  items: {
    paddingVertical: 15,
    paddingLeft: 20,
    marginTop: 5
  },
  itemSelected: {
    borderLeftWidth: 5,
    borderColor: 'red'
  },

  noSelectedItems: {
    paddingVertical: 20,
    paddingLeft: 25,
    marginTop: 5,
  }
})
export default MenuContainer
