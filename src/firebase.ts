// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOA0bMcKGqUiqSK-oBceetLux_8H1I8_c",
  authDomain: "broken-netflix.firebaseapp.com",
  databaseURL: "https://broken-netflix-default-rtdb.firebaseio.com",
  projectId: "broken-netflix",
  storageBucket: "broken-netflix.appspot.com",
  messagingSenderId: "99723036617",
  appId: "1:99723036617:web:9e47a63d1767e78a848a18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const fireAuth = getAuth(app);

export { app, db, storage, fireAuth };
