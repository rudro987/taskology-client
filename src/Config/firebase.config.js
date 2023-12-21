// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASSzjCBuExwjpORmbw4gIWxZ7m-mnT3gY",
  authDomain: "bistro-boss-client-3fbba.firebaseapp.com",
  projectId: "bistro-boss-client-3fbba",
  storageBucket: "bistro-boss-client-3fbba.appspot.com",
  messagingSenderId: "898121599468",
  appId: "1:898121599468:web:5c9af1f8ee713e5ed558c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;