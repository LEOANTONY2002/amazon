import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIGIfFOUZvc74oWBTvl98yBeHBQ6rsGQk",
  authDomain: "fir-a30d8.firebaseapp.com",
  databaseURL: "https://fir-a30d8.firebaseio.com",
  projectId: "fir-a30d8",
  storageBucket: "fir-a30d8.appspot.com",
  messagingSenderId: "1084644792542",
  appId: "1:1084644792542:web:ce33eb5ba4b0dddf90ca4f",
  measurementId: "G-DS7NYC1TXW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
