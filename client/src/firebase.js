// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e508c.firebaseapp.com",
  projectId: "mern-auth-e508c",
  storageBucket: "mern-auth-e508c.appspot.com",
  messagingSenderId: "359425512128",
  appId: "1:359425512128:web:6673bb4da2132d697a9325"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);