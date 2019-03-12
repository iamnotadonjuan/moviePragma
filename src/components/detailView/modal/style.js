import { StyleSheet } from 'react-native'

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
  
  })

  export default styles