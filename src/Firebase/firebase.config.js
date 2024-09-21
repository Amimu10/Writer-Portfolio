
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTCyHwtT_b1Q6NroVyhXL0TH5-hNKch84",
  authDomain: "my-blog-79d1a.firebaseapp.com",
  projectId: "my-blog-79d1a",
  storageBucket: "my-blog-79d1a.appspot.com",
  messagingSenderId: "881720051200",
  appId: "1:881720051200:web:6870651a8afa617f48bae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;