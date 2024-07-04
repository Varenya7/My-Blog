// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "myblog-62b2f.firebaseapp.com",
  projectId: "myblog-62b2f",
  storageBucket: "myblog-62b2f.appspot.com",
  messagingSenderId: "649371561288",
  appId: "1:649371561288:web:fdb82334bf60bf5d34977d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);