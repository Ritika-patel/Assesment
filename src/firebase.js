import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBDWPwITZ6geK-wzvlqZ1-SdZkyibtcdgQ",
  authDomain: "listed-7c41d.firebaseapp.com",
  projectId: "listed-7c41d",
  storageBucket: "listed-7c41d.appspot.com",
  messagingSenderId: "1057309853206",
  appId: "1:1057309853206:web:d5f41f642a73d73ca05737",
  measurementId: "G-L1PVK3WS9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider;
export {app, auth, provider};