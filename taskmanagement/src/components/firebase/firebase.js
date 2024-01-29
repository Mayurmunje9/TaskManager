// Import specific functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC1q1YjZwiyVT8mrTslNUrUKXlNae5iOs",
  authDomain: "task-management-1ee0d.firebaseapp.com",
  projectId: "task-management-1ee0d",
  storageBucket: "task-management-1ee0d.appspot.com",
  messagingSenderId: "472995416720",
  appId: "1:472995416720:web:a188ca3297210390122615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
