// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTRBFbrymmOgViG_6_pRO9Fu5e0cjWlKA",
  authDomain: "espresso-coffee-e7708.firebaseapp.com",
  projectId: "espresso-coffee-e7708",
  storageBucket: "espresso-coffee-e7708.appspot.com",
  messagingSenderId: "859210392908",
  appId: "1:859210392908:web:52c11be708020348e5dbe9",
  measurementId: "G-Z2TWBHQLJP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
