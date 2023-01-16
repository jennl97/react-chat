// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrAaRSp2E6BzBCk1uNXb0sgd6Gaf6EWfU",
  authDomain: "jenns-react-chat-boy.firebaseapp.com",
  projectId: "jenns-react-chat-boy",
  storageBucket: "jenns-react-chat-boy.appspot.com",
  messagingSenderId: "390876073800",
  appId: "1:390876073800:web:bae643c8d3043fe2c76d7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);