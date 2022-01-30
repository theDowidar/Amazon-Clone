import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0AVIisxRoURk81zNMvXo2BCLqzEN-o4E",
  authDomain: "clone-f413b.firebaseapp.com",
  projectId: "clone-f413b",
  storageBucket: "clone-f413b.appspot.com",
  messagingSenderId: "334437142583",
  appId: "1:334437142583:web:5eea8a58c3fe4ecd6c2fb2",
  measurementId: "G-6VMHJDWRLY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };