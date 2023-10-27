import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq_-XVHqr7jmUrOu8IwDgxfL6DWYCjWCA",
  authDomain: "real-estate-mern-d617f.firebaseapp.com",
  projectId: "real-estate-mern-d617f",
  storageBucket: "real-estate-mern-d617f.appspot.com",
  messagingSenderId: "237090207769",
  appId: "1:237090207769:web:0b41d4c3fc7f7f34c35288",
  measurementId: "G-3PQKWP53X4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
