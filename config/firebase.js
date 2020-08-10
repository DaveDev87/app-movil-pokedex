import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBWMRR4cXYZMfEQvpzuh5S9yEVlw_EIHSM",
    authDomain: "poke-380d6.firebaseapp.com",
    databaseURL: "https://poke-380d6.firebaseio.com",
    projectId: "poke-380d6",
    storageBucket: "poke-380d6.appspot.com",
    messagingSenderId: "1023450134598",
    appId: "1:1023450134598:web:5be26f768ee45b164f7247"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);