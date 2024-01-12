// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4MJBejjfxhLmKoOS_3f4JD2E_09hyVd8",
  authDomain: "lets-go-1182e.firebaseapp.com",
  projectId: "lets-go-1182e",
  storageBucket: "lets-go-1182e.appspot.com",
  messagingSenderId: "1017963011056",
  appId: "1:1017963011056:web:4d1dfcb958f229ec1a1b35",
  measurementId: "G-2TK663MBT1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);