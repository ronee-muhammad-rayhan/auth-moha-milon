// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkKDyilXh2cYMkIFq1QD3iceIWHC8sqrw",
    authDomain: "auth-moha-milon-76d53.firebaseapp.com",
    projectId: "auth-moha-milon-76d53",
    storageBucket: "auth-moha-milon-76d53.appspot.com",
    messagingSenderId: "541047856002",
    appId: "1:541047856002:web:c1d22e576002a243dd0d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;