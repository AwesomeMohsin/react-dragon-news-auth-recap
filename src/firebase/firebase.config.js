// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4oFKbBS3OVzbx4wKvno4zGI61mcJ3NP0",
  authDomain: "react-dragon-news-auth-8448c.firebaseapp.com",
  projectId: "react-dragon-news-auth-8448c",
  storageBucket: "react-dragon-news-auth-8448c.appspot.com",
  messagingSenderId: "846157180542",
  appId: "1:846157180542:web:9e86b329595772423fb22f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
