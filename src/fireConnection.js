import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDc_FzJsEraBeHZQcObF2joA-kbUvxfbIc",
    authDomain: "reactapp-55c6a.firebaseapp.com",
    databaseURL: "https://reactapp-55c6a.firebaseio.com",
    projectId: "reactapp-55c6a",
    storageBucket: "",
    messagingSenderId: "681945913700",
    appId: "1:681945913700:web:d6f42267c1299229468271"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;