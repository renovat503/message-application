import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMYG1HmiRQSos4dkyBo-auUoAZ5wQ-rMQ",
  authDomain: "firechat-9efc3.firebaseapp.com",
  projectId: "firechat-9efc3",
  storageBucket: "firechat-9efc3.appspot.com",
  messagingSenderId: "277274251297",
  appId: "1:277274251297:web:ecdf5ddb51573f2ac45360",
  measurementId: "G-7KX3YEWJKH"
});

// Initialize Firebase


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export { db , auth};