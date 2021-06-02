import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCKxx143ERIWtU7qJbmUx5JqtT_q2RTgb0",
  authDomain: "whatsappclone-c82ee.firebaseapp.com",
  projectId: "whatsappclone-c82ee",
  storageBucket: "whatsappclone-c82ee.appspot.com",
  messagingSenderId: "175499041190",
  appId: "1:175499041190:web:0b2db963ab34194dd79767",
  measurementId: "G-ZF3652FC2E",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { db, auth, provider };
