// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG40QFfAf_TGVVDnausQP9aR7exPaS9Uk",
  authDomain: "stingyweb.firebaseapp.com",
  projectId: "stingyweb",
  storageBucket: "stingyweb.appspot.com",
  messagingSenderId: "162098836216",
  appId: "1:162098836216:web:94e317844e4676ca89c10d",
  measurementId: "G-52L69E4H04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();