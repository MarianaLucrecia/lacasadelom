// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPM21ndcDx5y0srf8YeBnsoR0lxdbrTP0",
  authDomain: "lacasadelom-41ee5.firebaseapp.com",
  projectId: "lacasadelom-41ee5",
  storageBucket: "lacasadelom-41ee5.appspot.com",
  messagingSenderId: "504869233694",
  appId: "1:504869233694:web:f9f4bb99f67116985dba0f",
  measurementId: "G-0ELVE9ESP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;