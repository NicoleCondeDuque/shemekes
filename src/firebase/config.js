
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTdCe1hsqbrXA3fm1f8Ipe9edxeqGWTfw",
  authDomain: "ecomerce-e8ab4.firebaseapp.com",
  projectId: "ecomerce-e8ab4",
  storageBucket: "ecomerce-e8ab4.appspot.com",
  messagingSenderId: "321229055014",
  appId: "1:321229055014:web:f56d7c277c88c6b534b2e7",
  measurementId: "G-QGRMPY1ZBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);