// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJFc-1fzxB6HLp6yNSSw5WJOetbMEyCpA",
  authDomain: "streamgpt-fbfdc.firebaseapp.com",
  projectId: "streamgpt-fbfdc",
  storageBucket: "streamgpt-fbfdc.firebasestorage.app",
  messagingSenderId: "747558950935",
  appId: "1:747558950935:web:83a3e658866ed7e77ba452",
  measurementId: "G-1QTPQQ6EMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const auth = getAuth();