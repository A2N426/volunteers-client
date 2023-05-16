// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-XWqDItA3DfueU3_tEXoaB5M1VmnVoCk",
  authDomain: "myself-firebas.firebaseapp.com",
  projectId: "myself-firebas",
  storageBucket: "myself-firebas.appspot.com",
  messagingSenderId: "56634051727",
  appId: "1:56634051727:web:49b7c05d142a270c56f4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;