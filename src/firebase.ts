// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtKZcy7BKIDm6nnc2ygAOMxDfaTWuckSo",
  authDomain: "moviles1031-73560.firebaseapp.com",
  projectId: "moviles1031-73560",
  storageBucket: "moviles1031-73560.firebasestorage.app",
  messagingSenderId: "519658308532",
  appId: "1:519658308532:web:59c0765328a286858fa8e1",
  measurementId: "G-WENNRE464N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{app, analytics, auth, database}