import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAuF5VkpGhNViQ0_kzEu8VVwEMm9XXCE2w",
    authDomain: "vue-project-geo-app.firebaseapp.com",
    databaseURL: "https://vue-project-geo-app.firebaseio.com",
    projectId: "vue-project-geo-app",
    storageBucket: "vue-project-geo-app.appspot.com",
    messagingSenderId: "852021889063",
    appId: "1:852021889063:web:5d5f5543300edc6f326602"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
