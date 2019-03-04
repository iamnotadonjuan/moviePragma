import * as firebase from 'firebase'
const conection = {
  initialize: function () {
    var config = {
      apiKey: "AIzaSyAo226kJY6N6NyxvQpIH0WUtBD3UWkoaao",
      authDomain: "arquitecturapragma.firebaseapp.com",
      databaseURL: "https://arquitecturapragma.firebaseio.com",
      projectId: "arquitecturapragma",
      storageBucket: "",
      messagingSenderId: "340869565697"
    }
    firebase.initializeApp(config)
  }
}
export default conection
