
import React from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'

renderButton = (text, props) => (
  <TouchableOpacity onPress={() => props.isCloseModal()}>
    <View style={styles.button}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

renderModalContent = (props, torrents, title_long) => (
  // console.log(torrents)

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
     {this.renderButton('Close', props)}
  </View>
);

function DetailBody(props) {
  const { torrents, title_long } = props.navigation.state.params
  return (
    <View style={styles.container}>
      <Modal
        isVisible={props.isOpen}
        onBackdropPress={() => props.isCloseModal()}
        onSwipeComplete={() => props.isCloseModal()}
        swipeDirection="left">
        {this.renderModalContent(props, torrents, title_long)}
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#E0E0E0",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  titleMovie: {
    fontSize: 20,
    color:'#212121'
  },
  colorTitleOption: {
    color: 'orange'
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contanierOption: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  textBack:{
    color:'#212121'
  }

});

export default DetailBody