// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcmKCRPF0n6IKoTP3DTtBK0sBBDqfjoeQ",
  authDomain: "to-do-app-e0477.firebaseapp.com",
  projectId: "to-do-app-e0477",
  storageBucket: "to-do-app-e0477.appspot.com",
  messagingSenderId: "527608598334",
  appId: "1:527608598334:web:c25a55807d3466b809266f",
  measurementId: "G-L4G7HBJPBY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Добавляем Firebase Storage

export { auth, db, storage };