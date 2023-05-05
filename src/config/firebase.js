import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyB1WVqKDITWIr5NHkiJPhg7bHPOKoP0q7o",
  authDomain: "luxurah-e825c.firebaseapp.com",
  projectId: "luxurah-e825c",
  storageBucket: "luxurah-e825c.appspot.com",
  messagingSenderId: "608568429384",
  appId: "1:608568429384:web:a997e6cadc24355cc2417d",
  measurementId: "G-PTV6D1H78R"
});

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db

