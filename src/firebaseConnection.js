import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSWNFJqCBxYAUg9RkCXrmVBlKxh_pH-zM",
  authDomain: "curso-922ab.firebaseapp.com",
  projectId: "curso-922ab",
  storageBucket: "curso-922ab.appspot.com",
  messagingSenderId: "762628153952",
  appId: "1:762628153952:web:76de894e7a308fff6d9905",
  measurementId: "G-TP4XN2Z38W"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };