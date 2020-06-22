import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCnOtbzmlG7iu6fffK-pQRFKq77JiePUPk",
    authDomain: "meuapp-c2e3c.firebaseapp.com",
    databaseURL: "https://meuapp-c2e3c.firebaseio.com",
    projectId: "meuapp-c2e3c",
    storageBucket: "meuapp-c2e3c.appspot.com",
    messagingSenderId: "410909676981",
    appId: "1:410909676981:web:c73e42ac82cd84783ab5fc",
    measurementId: "G-CSCNP2EKJV"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }


  export default firebase;