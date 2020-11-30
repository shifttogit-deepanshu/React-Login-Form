import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAt06r6i23M5r75ubCcqUIT8lck8BJiWrc",
    authDomain: "react-login-b01e9.firebaseapp.com",
    databaseURL: "https://react-login-b01e9.firebaseio.com",
    projectId: "react-login-b01e9",
    storageBucket: "react-login-b01e9.appspot.com",
    messagingSenderId: "1006497390922",
    appId: "1:1006497390922:web:1d58c7aa00a087d505e1b3",
    measurementId: "G-692P9H08SN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export var provider = new firebase.auth.GoogleAuthProvider();

  export default firebase