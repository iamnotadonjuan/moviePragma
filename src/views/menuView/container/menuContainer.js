import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { i18n } from 'react-native-i18n-localize'

const { width, height } = Dimensions.get('window')

const MenuContainer = (props) => {
  return (
    <View style={styles.menu}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarImagen}>
          <Text style={styles.text}>{i18n.t('menu.title')}</Text>
        </View>
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
            <Text style={styles.text}>{i18n.t('menu.download')}</Text>
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
            <Icon
              style={styles.iconWidthText}
              name="check"
              color="white"
              size={28}
            />
            <Text style={styles.text}>{i18n.t('menu.myList')}</Text>
          </View>
          <Icon
            style={styles.rightIcon}
            name="angle-right"
            color="white"
            size={25}
          />
        </View>
        <View style={[styles.items, styles.itemSelected]}>
          <Text style={styles.text}>{i18n.t('menu.home')}</Text>
        </View>
        <View style={styles.noSelectedItems}>
          <Text style={styles.text}>{i18n.t('menu.genre')}</Text>
        </View>
        <TouchableHighlight onPress={props.logOut}>
          <View style={styles.noSelectedItems}>
              <Text style={styles.text}>{i18n.t('menu.logOut')}</Text>
          </View>
        </TouchableHighlight>
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
    borderColor: 'orange'
  },
  noSelectedItems: {
    paddingVertical: 20,
    paddingLeft: 25,
    marginTop: 5,
  }
})

export default MenuContainer
