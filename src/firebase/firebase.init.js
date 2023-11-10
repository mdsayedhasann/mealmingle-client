// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5C6OB3Y3DcJYkDgWg87ig7Fn8c1wM5os",
  authDomain: "mealmingle-29bf9.firebaseapp.com",
  projectId: "mealmingle-29bf9",
  storageBucket: "mealmingle-29bf9.appspot.com",
  messagingSenderId: "39411127940",
  appId: "1:39411127940:web:87a869ca07d6a18e17d4d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
