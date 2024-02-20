import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAihjncfhCL0g5sWVQAD6BaZBg9QTUAiVU",
  authDomain: "dream-finder-9c9e8.firebaseapp.com",
  projectId: "dream-finder-9c9e8",
  storageBucket: "dream-finder-9c9e8.appspot.com",
  messagingSenderId: "457536321868",
  appId: "1:457536321868:web:6c02324fe01ac6d027f7e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
