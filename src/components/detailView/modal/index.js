import React from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style'

function DetailBody(props) {
  const { torrents, title_long } = props.navigation.state.params
  return (
    <View style={styles.container}>
      <Modal
        isVisible={props.isOpen}
        onBackdropPress={() => props.isCloseModal()}
        onSwipeComplete={() => props.isCloseModal()}
        swipeDirection="left">
        <View style={styles.modalContent}>
          <View >
            <Text style={styles.titleMovie}>{title_long}</Text>
          </View>
          {torrents.map((torrent, key) =>
            <View key={key} style={styles.contanierOption}>
              <Text style={styles.colorTitleOption}>Option {key}</Text>
              <Text><Text style={styles.textBack}>Url:</Text> {torrent.url}</Text>
              <View style={styles.option}>
                <View>
                  <Text><Text style={styles.textBack}>Quality:</Text> {torrent.quality}</Text>
                  <Text><Text style={styles.textBack}>Type:</Text> {torrent.type}</Text>
                  <Text><Text style={styles.textBack}>Size:</Text> {torrent.size}</Text>
                </View>
                <View>
                  <TouchableNativeFeedback onPress={() => null}>
                    <View>
                      <Icon
                        name="download"
                        size={20}
                        color="#00BCD4" />
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
            </View>
          )}
          <TouchableOpacity onPress={() => props.isCloseModal()}>
            <View style={styles.button}>
              <Text>close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default DetailBody
