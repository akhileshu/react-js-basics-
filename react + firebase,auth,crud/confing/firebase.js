// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import auth service
import {getAuth} from 'firebase/auth'
// for login with google
import { GoogleAuthProvider } from "firebase/auth";
// for cloudstorage
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB6cnhX3y2kmTmyB6KjZPl0fhI752ejAw",
  authDomain: "fir-learning-b487e.firebaseapp.com",
  projectId: "fir-learning-b487e",
  storageBucket: "fir-learning-b487e.appspot.com",
  messagingSenderId: "47370665892",
  appId: "1:47370665892:web:f4c0487058020792a84b31",
  measurementId: "G-38199T3Z95"
};

// Initialize Firebase
// auth
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// google provider
export const googleProvider= new GoogleAuthProvider()
// db
export const db =getFirestore(app)
