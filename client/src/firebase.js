// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estate-cc6fe.firebaseapp.com",
  projectId: "mern-estate-cc6fe",
  storageBucket: "mern-estate-cc6fe.appspot.com",
  messagingSenderId: "943383225973",
  appId: "1:943383225973:web:e9049966488a8091de3a3c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);