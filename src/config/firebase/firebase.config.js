import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCtuCEL1_toia7WZFHZB_SfnJHadePxYfI",
  authDomain: "dream-finder-ed32d.firebaseapp.com",
  projectId: "dream-finder-ed32d",
  storageBucket: "dream-finder-ed32d.appspot.com",
  messagingSenderId: "107538895961",
  appId: "1:107538895961:web:83f387420f526f6b394d48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
