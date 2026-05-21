// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChEBw1LdFbhpzo9u-Goghnt8Tqbo2d4gk",
  authDomain: "my-project-6c80e.firebaseapp.com",
  projectId: "my-project-6c80e",
  storageBucket: "my-project-6c80e.firebasestorage.app",
  messagingSenderId: "101099124548",
  appId: "1:101099124548:web:23bddde0d4a34978048911",
  measurementId: "G-6F4DJQ4WF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

//Google provider
export const googleProvider = new GoogleAuthProvider();
