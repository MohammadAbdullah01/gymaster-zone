// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrkIaR2Sws-RRMWsxo0JSP-tRZAgXjKE4",
    authDomain: "gymaster-78fd8.firebaseapp.com",
    projectId: "gymaster-78fd8",
    storageBucket: "gymaster-78fd8.appspot.com",
    messagingSenderId: "341418030855",
    appId: "1:341418030855:web:90d444d3ece524294337a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;