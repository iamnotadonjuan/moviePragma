
import React from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Modal from "react-native-modal";

renderButton = (text, onPress) => (
  <TouchableOpacity onPress={onPress}>
    {/* <View style={styles.button}>
      <Text>{text}</Text>
    </View> */}
  </TouchableOpacity>
);

renderModalContent = (props, torrents) => (

  <View style={styles.modalContent}>
   {torrents.map(
   torrent =>(
    console.log(torrent.url)
   )
  )}

    {/* <View>
      {torrents.map(torrent => <View key={`task_${torrent}`}>{torrent}</View>)}
    </View> */}
    {/* <Text>Hello!</Text>
    {this.renderButton("Close", () => props.isCloseModal())} */}
  </View>
);

function DetailBody(props) {
  const { torrents } = props.navigation.state.params
  return (
    <View style={styles.container}>
      <Modal
        isVisible={props.isOpen}
        onBackdropPress={() => props.isCloseModal()}
        onSwipeComplete={() => props.isCloseModal()}
        swipeDirection="left">
        {this.renderModalContent(props, torrents)}
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
    backgroundColor: "lightblue",
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
    justifyContent: "center",
    alignItems: "center",
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

});

export default DetailBody