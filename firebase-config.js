// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// REMOVED: getStorage import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcO6TPCVdhIIa1wmsbOiyWIaHFSOEvYUg",
  authDomain: "nusantara-trade-28fe5.firebaseapp.com",
  projectId: "nusantara-trade-28fe5",
  storageBucket: "nusantara-trade-28fe5.firebasestorage.app",
  messagingSenderId: "109481408620",
  appId: "1:109481408620:web:a8d70848be5e4cdf784049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
// REMOVED: export const storage
