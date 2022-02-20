// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzhadI7ZtQgN0AkNYNPBDY8DMe-xEAfqk",
  authDomain: "food-in-town-b6cb6.firebaseapp.com",
  projectId: "food-in-town-b6cb6",
  storageBucket: "food-in-town-b6cb6.appspot.com",
  messagingSenderId: "697772988564",
  appId: "1:697772988564:web:6fc67c9df2ff338e68bc81"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
const storage = getStorage()

export { db, storage }
