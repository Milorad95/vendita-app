// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const environment = {
    production: false,
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebaseConfig : {
    apiKey: "AIzaSyCMGHq7OMfTLzHAA6BVnUEkTrc7RtMpWLA",
    authDomain: "vendita-app.firebaseapp.com",
    projectId: "vendita-app",
    storageBucket: "vendita-app.appspot.com",
    messagingSenderId: "135734550290",
    appId: "1:135734550290:web:b6578784ccf7ea23af9dcb",
    measurementId: "G-8NX4NDKNVE"
  }
};

const firebaseConfig = {
    apiKey: "AIzaSyCMGHq7OMfTLzHAA6BVnUEkTrc7RtMpWLA",
    authDomain: "vendita-app.firebaseapp.com",
    projectId: "vendita-app",
    storageBucket: "vendita-app.appspot.com",
    messagingSenderId: "135734550290",
    appId: "1:135734550290:web:b6578784ccf7ea23af9dcb",
    measurementId: "G-8NX4NDKNVE"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
