import React from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { i18n } from 'react-native-i18n-localize'
import styles from './style'

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

export default MenuContainer
