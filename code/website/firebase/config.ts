// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnp6SwXGoS_-jO7hgrCfTDKKibX9hE4xA",
  authDomain: "mscs-937d9.firebaseapp.com",
  projectId: "mscs-937d9",
  storageBucket: "mscs-937d9.appspot.com",
  messagingSenderId: "508253672676",
  appId: "1:508253672676:web:7a81c7ba0aacf68e40c8f1"
};

// Initialize Firebase
// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;