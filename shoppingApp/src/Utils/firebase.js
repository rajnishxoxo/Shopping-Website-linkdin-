// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOdkz_w5nH0hI2LTpwc9_RcXxhPS00HVc",
  authDomain: "myshoppingreact.firebaseapp.com",
  projectId: "myshoppingreact",
  storageBucket: "myshoppingreact.appspot.com",
  messagingSenderId: "402496960932",
  appId: "1:402496960932:web:77431fc75018756a436931",
  measurementId: "G-0XTG93QKDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
