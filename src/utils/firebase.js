// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf-_OPOb4pL8ICCXV-vy4kXybtvZUQFQo",
  authDomain: "netflixgpt-ea683.firebaseapp.com",
  projectId: "netflixgpt-ea683",
  storageBucket: "netflixgpt-ea683.firebasestorage.app",
  messagingSenderId: "492797117250",
  appId: "1:492797117250:web:fc96209b839ea3cba77edb",
  measurementId: "G-32NGT55PQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);