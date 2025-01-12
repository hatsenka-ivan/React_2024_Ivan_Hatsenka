// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQUhx2ft-gzdq5NXueejyxyE_WOpBOWMU",
  authDomain: "react-homework-ivan-hatsenka.firebaseapp.com",
  projectId: "react-homework-ivan-hatsenka",
  storageBucket: "react-homework-ivan-hatsenka.firebasestorage.app",
  messagingSenderId: "965453156089",
  appId: "1:965453156089:web:374a5a0f0e2651952f5c28",
  measurementId: "G-SXC3CGBYDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
