import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqDbgs9razrQ8YFXqVWl-dM4DLfC9023o",
  authDomain: "clone-2c8cb.firebaseapp.com",
  projectId: "clone-2c8cb",
  storageBucket: "clone-2c8cb.appspot.com",
  messagingSenderId: "257921521391",
  appId: "1:257921521391:web:107f80e6dbaff5c725ad1a",
  measurementId: "G-TQ2TMPFHT4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };