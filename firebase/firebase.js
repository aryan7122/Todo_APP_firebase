// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCt5k89Bi_wy_75KP7LrYDINiBCBaPnSRo",
    authDomain: "todoreactjsapp.firebaseapp.com",
    projectId: "todoreactjsapp",
    storageBucket: "todoreactjsapp.appspot.com",
    messagingSenderId: "165606101827",
    appId: "1:165606101827:web:bef59a3fe36f20b26395f6",
    measurementId: "G-7DS0PGJ27Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);