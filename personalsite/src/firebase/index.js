import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = ({
    apiKey: "AIzaSyAN-IVBYuiB1sSTBqU9ZfL7F-PXIuQxZTQ",
    authDomain: "react-efe4b.firebaseapp.com",
    projectId: "react-efe4b",
    storageBucket: "react-efe4b.appspot.com",
    messagingSenderId: "821335709750",
    appId: "1:821335709750:web:8f2509324aa52b0803e097",
    measurementId: "G-XW9YYQ5J8P"
  });

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
    firebase, db
}

