import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyCnOtbzmlG7iu6fffK-pQRFKq77JiePUPk",
    authDomain: "meuapp-c2e3c.firebaseapp.com",
    databaseURL: "https://meuapp-c2e3c.firebaseio.com",
    projectId: "meuapp-c2e3c",
    storageBucket: "meuapp-c2e3c.appspot.com",
    messagingSenderId: "410909676981",
    appId: "1:410909676981:web:441a733c2a148c703ab5fc",
    measurementId: "G-XXYZ7GN1YF"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
​
​export default firebase;​​