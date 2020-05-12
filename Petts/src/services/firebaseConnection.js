import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBrsfLyOJNZ5oNnDUhffSMPhT_ARwTdp48",
    authDomain: "petts-c7398.firebaseapp.com",
    databaseURL: "https://petts-c7398.firebaseio.com",
    projectId: "petts-c7398",
    storageBucket: "petts-c7398.appspot.com",
    messagingSenderId: "729500035832",
    appId: "1:729500035832:web:3dc25530e68b2a283ca90d",
    measurementId: "G-LZ4FNNVKJX"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();
  }

  export default firebase;
  
