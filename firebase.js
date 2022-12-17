// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP4BHunrc_OBoLUHr4g1pieILzIZEoEpY",
  authDomain: "gaminglibraryapp.firebaseapp.com",
  projectId: "gaminglibraryapp",
  storageBucket: "gaminglibraryapp.appspot.com",
  messagingSenderId: "975731283173",
  appId: "1:975731283173:web:2be6c7b5ab8c219af6300c"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export {auth};