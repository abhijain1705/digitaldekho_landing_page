// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "digitaldekho-a9b81.firebaseapp.com",
  projectId: "digitaldekho-a9b81",
  storageBucket: "digitaldekho-a9b81.appspot.com",
  messagingSenderId: process.env.MESSAGE_ID,
  appId: process.env.APP_ID,
  measurementId: "G-L57CJXWR43",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
