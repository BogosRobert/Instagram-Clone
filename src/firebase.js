
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCDYg598-7s21n9sdnoxx6bCM9OCCZ4xZs",
    authDomain: "instagram-clone-dc866.firebaseapp.com",
    databaseURL: "https://instagram-clone-dc866.firebaseio.com",
    projectId: "instagram-clone-dc866",
    storageBucket: "instagram-clone-dc866.appspot.com",
    messagingSenderId: "797171509830",
    appId: "1:797171509830:web:28eb8b23877e1a96fcb847",
    measurementId: "G-65776JBYHP"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  

  export { db, auth, storage };
