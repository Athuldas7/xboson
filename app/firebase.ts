// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjbuUFQ07JGmQBS8qfB71TmSqUzjXGgUU",
  authDomain: "caax-web.firebaseapp.com",
  projectId: "caax-web",
  storageBucket: "caax-web.appspot.com",
  messagingSenderId: "752459488864",
  appId: "1:752459488864:web:1bd88c6c595ed72fa0ad05",
  measurementId: "G-RS1LV47HZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);