// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APIKEY, 
  authDomain: "blog-257d2.firebaseapp.com",
  projectId: "blog-257d2",
  storageBucket: "blog-257d2.appspot.com",
  messagingSenderId: "1077510092096",
  appId: "1:1077510092096:web:1ad0765c789436763eb6a5",
  measurementId: "G-KXGL5PVEVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth  = getAuth(app);

