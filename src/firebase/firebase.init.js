// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHPOkxxnqQr8obs0qnN_VJjdcal1enug4",
  authDomain: "job-finder-web-b9f28.firebaseapp.com",
  projectId: "job-finder-web-b9f28",
  storageBucket: "job-finder-web-b9f28.firebasestorage.app",
  messagingSenderId: "738290511561",
  appId: "1:738290511561:web:6178d3ffdca349bb926718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);