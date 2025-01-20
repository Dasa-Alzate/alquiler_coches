// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK0rSqsswPFgcV9NI_hsC5PpQSWBwb0GI",
  authDomain: "alquiler-coches-3f838.firebaseapp.com",
  projectId: "alquiler-coches-3f838",
  storageBucket: "alquiler-coches-3f838.firebasestorage.app",
  messagingSenderId: "635937848484",
  appId: "1:635937848484:web:e6d97f666e0bfa7e527a31",
  measurementId: "G-3D0V8QRDFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };