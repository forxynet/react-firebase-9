// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwjcDwJ7SvrBOohEpcyttwWkYlMBRvqMM",
  authDomain: "reading-list-app-d6e97.firebaseapp.com",
  projectId: "reading-list-app-d6e97",
  storageBucket: "reading-list-app-d6e97.firebasestorage.app",
  messagingSenderId: "402995207890",
  appId: "1:402995207890:web:76d1d8fa39193acee3d70b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, app, auth } 